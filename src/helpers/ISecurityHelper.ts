export interface ISecurityHelper {
    generateHashPassword(password: string): string;
    isValidPassword(password: string, hash: string): boolean;
}