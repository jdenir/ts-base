export interface ITokenHelper {
    sign(userId: number): string;
    isValid(token: string): void;
}