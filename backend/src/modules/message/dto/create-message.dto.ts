import { ApiProperty } from "@nestjs/swagger";

export class PostMessageDto {
    @ApiProperty()
    content: string;

    @ApiProperty()
    user_name: string;

    @ApiProperty()
    room_name: string;
}