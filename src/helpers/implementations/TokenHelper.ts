import { ITokenHelper } from "../ITokenHelper";
import jwt from "jsonwebtoken";

export class TokenHelper implements ITokenHelper {
    sign(userId: number): string {
        return jwt.sign({ userId }, process.env.TOKEN_SECRET, { expiresIn: '1d' });
    }

    getUserId(token: string): number {
        const data = jwt.verify(token, process.env.TOKEN_SECRET);
        const { userId } = data as ITokenDTO;
        return userId;
    }
}