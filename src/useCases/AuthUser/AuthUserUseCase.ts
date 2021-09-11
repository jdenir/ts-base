import { ISecurityHelper } from "../../helpers/ISecurityHelper";
import { ITokenHelper } from "../../helpers/ITokenHelper";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IAuthUserDTO } from "./AuthUserDTO";

export class AuthUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private securityHelper: ISecurityHelper,
        private tokenHelper: ITokenHelper
    ) { }

    async execute(data: IAuthUserDTO): Promise<string> {
        const user = await this.usersRepository.findByEmail(data.email);
        if (!user) throw new Error('User does not exists.');
        if (!this.securityHelper.isValidPassword(data.password, user.password))
            throw new Error('Invalid password.');

        return this.tokenHelper.sign(user.id);
    }
}