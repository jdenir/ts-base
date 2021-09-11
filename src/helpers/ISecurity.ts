export interface ISecurity {
    generateHashPassword(password: string): string;
}