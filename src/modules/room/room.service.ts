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

    async create(createRoomDto: CreateRoomDto): Promise<Room> {
        const room = new Room();
        room.name = createRoomDto.name;

        return this.roomRepository.save(room);
    }

    async findAll(): Promise<Room[]> {
        return this.roomRepository.find();
    }

    async findById(id: number): Promise<Room> {
        return this.roomRepository.findOneBy({id});
    }
}