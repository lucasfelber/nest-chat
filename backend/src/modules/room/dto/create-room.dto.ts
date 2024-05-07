import { ApiProperty } from "@nestjs/swagger";

export class CreateRoomDto {
    constructor(name: string) {
        this.name = name;
    }
    
    @ApiProperty()
    name: string;
}