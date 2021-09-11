import { ISecurityHelper } from "../ISecurityHelper";
import bcrypt from 'bcryptjs';

export class SecurityHelper implements ISecurityHelper {
    generateHashPassword(password: string): string {
        return bcrypt.hashSync(password, 8);
    }

    isValidPassword(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash);
    }
}