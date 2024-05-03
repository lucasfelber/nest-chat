import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { Room } from "../room/room.entity";

@Entity("messages")
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(() => User, {nullable: false})
    user: User;

    @ManyToOne(() => Room, {nullable: false})
    room: Room;
}