import { Body, Controller, Post } from "@nestjs/common";
import { MessageService } from "./message.service";
import { PostMessageDto } from "./dto/create-message.dto";

@Controller("message")
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @Post()
    async post(@Body() postMessageDto: PostMessageDto) {
        return this.messageService.post(postMessageDto);
    }
}