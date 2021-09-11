export interface ITokenHelper {
    sign(userId: number): string;
    getUserId(token: string): number;
}