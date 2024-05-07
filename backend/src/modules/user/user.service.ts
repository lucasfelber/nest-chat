import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async save(createUserDto: CreateUserDto): Promise<User> {
        let existing_user = await this.userRepository.findOneBy({name: createUserDto.name});

        if (!existing_user) {
            const new_user = new User();
            new_user.name = createUserDto.name;

            return this.userRepository.save(new_user);
        } else {
            return existing_user;
        }
    }
}