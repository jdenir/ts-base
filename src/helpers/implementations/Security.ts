import { ISecurity } from "../ISecurity";
import bcrypt from 'bcryptjs';

export class Security implements ISecurity {
    generateHashPassword(password: string): string {
        return bcrypt.hashSync(password, 8);
    }

}