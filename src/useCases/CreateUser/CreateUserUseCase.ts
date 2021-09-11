import { ISecurity } from "../../helpers/ISecurity";
import { User } from "../../models/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private security: ISecurity
    ) { }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (userAlreadyExists) throw new Error('User already exists.');

        data.password = this.security.generateHashPassword(data.password);
        const user = new User(data);
        await this.usersRepository.save(user);
    }
}