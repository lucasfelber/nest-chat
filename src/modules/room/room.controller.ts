import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateRoomDto } from "./dto/create-room.dto";
import { RoomService } from "./room.service";

@Controller("room")
export class RoomController {
    constructor(private readonly roomService: RoomService) {}

    @Post()
    async create(@Body() createRoomDto: CreateRoomDto) {
        return this.roomService.create(createRoomDto);
    }

    @Get()
    async getAll() {
        return this.roomService.findAll();
    }
}