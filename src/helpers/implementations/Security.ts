import { ISecurity } from "../ISecurity";
import bcrypt from 'bcryptjs';

export class Security implements ISecurity {
    generateHashPassword(password: string): string {
        return bcrypt.hashSync(password, 8);
    }

    isValidPassword(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash);
    }
}