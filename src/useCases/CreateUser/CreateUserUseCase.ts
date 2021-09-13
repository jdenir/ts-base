import { ISecurityHelper } from "../../helpers/ISecurityHelper";
import { User } from "../../models/User";
import { IRolesRepository } from "../../repositories/IRolesRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private roleRepository: IRolesRepository,
        private securityHelper: ISecurityHelper
    ) { }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
        if (userAlreadyExists) throw new Error('User already exists.');

        const role = await this.roleRepository.findById(data.roleId);
        if (!role) throw new Error('Role does not exists.');

        data.password = this.securityHelper.generateHashPassword(data.password);

        const user = new User({ ...data, role });
        await this.usersRepository.save(user);
    }
}