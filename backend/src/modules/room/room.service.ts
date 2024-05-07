import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Room } from "./room.entity";
import { Repository } from "typeorm";
import { CreateRoomDto } from "./dto/create-room.dto";

@Injectable()
export class RoomService {
    constructor(
        @InjectRepository(Room)
        private readonly roomRepository: Repository<Room>,
    ) {}

    async save(createRoomDto: CreateRoomDto): Promise<Room> {
        let existing_room = await this.roomRepository.findOneBy({name: createRoomDto.name});

        if (!existing_room) {
            const new_room = new Room();
            new_room.name = createRoomDto.name;

            return this.roomRepository.save(new_room);
        } else {
            return existing_room;
        }
    }

    async findAll(): Promise<Room[]> {
        return this.roomRepository.find();
    }
}