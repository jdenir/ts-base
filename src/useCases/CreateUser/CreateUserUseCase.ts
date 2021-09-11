import { ISecurityHelper } from "../../helpers/ISecurityHelper";
import { User } from "../../models/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private securityHelper: ISecurityHelper
    ) { }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (userAlreadyExists) throw new Error('User already exists.');

        data.password = this.securityHelper.generateHashPassword(data.password);
        const user = new User(data);
        await this.usersRepository.save(user);
    }
}