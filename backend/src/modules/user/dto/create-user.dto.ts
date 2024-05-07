import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    constructor(name: string) {
        this.name = name;
    }

    @ApiProperty()
    name: string;
}