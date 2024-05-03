import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateRoomDto } from "./create-room.dto";

@Controller("room")
export class RoomController {
    @Post()
    async create(@Body() createRoomDto: CreateRoomDto) {
        return `create room with name: ${createRoomDto.name}`;
    }

    @Get()
    async getAll() {
        return "get all rooms"
    }

    @Get(":name")
    async getOne(@Param("name") name: string) {
        return `get room with name: ${name}`
    }
}