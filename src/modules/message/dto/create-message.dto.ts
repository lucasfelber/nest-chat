import { ApiProperty } from "@nestjs/swagger";

export class CreateMessageDto {
    @ApiProperty()
    content: string;

    @ApiProperty()
    user_id: number;

    @ApiProperty()
    room_id: number;
}