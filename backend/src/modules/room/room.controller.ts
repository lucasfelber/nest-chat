import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateRoomDto } from "./dto/create-room.dto";
import { RoomService } from "./room.service";

@Controller("room")
export class RoomController {
    constructor(private readonly roomService: RoomService) {}

    @Get()
    async getAll() {
        return this.roomService.findAll();
    }
}