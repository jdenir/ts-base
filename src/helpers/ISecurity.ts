export interface ISecurity {
    generateHashPassword(password: string): string;
    isValidPassword(password: string, hash: string): boolean;
}