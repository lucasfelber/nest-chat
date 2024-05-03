import { Body, Controller, Post } from "@nestjs/common";
import { MessageService } from "./message.service";
import { CreateMessageDto } from "./dto/create-message.dto";

@Controller("message")
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @Post()
    async create(@Body() createMessageDto: CreateMessageDto) {
        return this.messageService.create(createMessageDto);
    }
}