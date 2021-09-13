import { Role } from "../models/Role";

export interface IRolesRepository {
    findById(id: number): Promise<Role>;
}