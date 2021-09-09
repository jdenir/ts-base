import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IGetUserByEmailDTO } from "./GetUserByEmailDTO";

export class GetUserByEmailUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(data: IGetUserByEmailDTO): Promise<User> {
        const user = await this.usersRepository.findByEmail(data.email);
        return user;
    }
}