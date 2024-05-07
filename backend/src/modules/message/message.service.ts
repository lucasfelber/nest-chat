import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Message } from "./message.entity";
import { PostMessageDto } from "./dto/create-message.dto";
import { Repository } from "typeorm";
import { UserService } from "../user/user.service";
import { RoomService } from "../room/room.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { CreateRoomDto } from "../room/dto/create-room.dto";

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
        private readonly userService: UserService,
        private readonly roomService: RoomService,
    ) {}

    async post(postMessageDto: PostMessageDto): Promise<Message> {
        const message = new Message();
        message.content = postMessageDto.content;
        message.user = await this.userService.save(new CreateUserDto(postMessageDto.user_name));
        message.room = await this.roomService.save(new CreateRoomDto(postMessageDto.room_name));

        return this.messageRepository.save(message)
    }
}