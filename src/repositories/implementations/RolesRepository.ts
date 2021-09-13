import { getRepository } from "typeorm";
import { Role } from "../../models/Role";
import { IRolesRepository } from "../IRolesRepository";

export class RolesRepository implements IRolesRepository {
    async findById(id: number): Promise<Role> {
        const role = await getRepository(Role).findOne({ id });
        return role;
    }
}