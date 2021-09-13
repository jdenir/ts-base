import { getRepository } from "typeorm";
import { User } from "../../models/User";
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

    async findById(id: number): Promise<User> {
        const user = await getRepository(User).findOneOrFail({ id: id }, { relations: ['roles'] });
        return user;
    }
}