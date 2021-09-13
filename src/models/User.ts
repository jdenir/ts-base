import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./Role";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public email: string;

    @Column()
    public password: string;

    @ManyToOne(() => Role, role => role.users)
    public role: Role;

    constructor(props: Omit<User, 'id'>) {
        Object.assign(this, props);
    }
}