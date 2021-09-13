import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: 'roles' })
export class Role {
    @PrimaryGeneratedColumn()
    public readonly id: number;

    @Column()
    public name: string;

    @OneToMany(() => User, user => user.role)
    public users: User[];

    constructor(props: Omit<Role, 'id'>) {
        Object.assign(this, props);
    }
}