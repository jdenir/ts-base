import { getRepository } from "typeorm";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<User> {
        const user = await getRepository(User).findOne({ email: email });
        return user;
    }

    async save(user: User): Promise<void> {
        const userA = await getRepository(User).save(getRepository(User).create(user));
        console.log(userA);
    }
}