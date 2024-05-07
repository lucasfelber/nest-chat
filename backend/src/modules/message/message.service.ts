import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Message } from "./message.entity";
import { CreateMessageDto } from "./dto/create-message.dto";
import { Repository } from "typeorm";
import { User } from "../user/user.entity";
import { UserService } from "../user/user.service";
import { RoomService } from "../room/room.service";

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
        private readonly userService: UserService,
        private readonly roomService: RoomService,
    ) {}

    async create(createMessageDto: CreateMessageDto): Promise<Message> {
        const message = new Message();
        message.content = createMessageDto.content;
        message.user = await this.userService.findById(createMessageDto.user_id);
        message.room = await this.roomService.findById(createMessageDto.room_id);

        return this.messageRepository.save(message)
    }
}