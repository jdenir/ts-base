import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRoleAndUserRelationTable1631570840683 implements MigrationInterface {
    name = 'CreateRoleAndUserRelationTable1631570840683'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "users_roles" ("usersId" integer NOT NULL, "rolesId" integer NOT NULL, PRIMARY KEY ("usersId", "rolesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_deeb1fe94ce2d111a6695a2880" ON "users_roles" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_21db462422f1f97519a29041da" ON "users_roles" ("rolesId") `);
        await queryRunner.query(`DROP INDEX "IDX_deeb1fe94ce2d111a6695a2880"`);
        await queryRunner.query(`DROP INDEX "IDX_21db462422f1f97519a29041da"`);
        await queryRunner.query(`CREATE TABLE "temporary_users_roles" ("usersId" integer NOT NULL, "rolesId" integer NOT NULL, CONSTRAINT "FK_deeb1fe94ce2d111a6695a2880e" FOREIGN KEY ("usersId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_21db462422f1f97519a29041da0" FOREIGN KEY ("rolesId") REFERENCES "roles" ("id") ON DELETE CASCADE ON UPDATE CASCADE, PRIMARY KEY ("usersId", "rolesId"))`);
        await queryRunner.query(`INSERT INTO "temporary_users_roles"("usersId", "rolesId") SELECT "usersId", "rolesId" FROM "users_roles"`);
        await queryRunner.query(`DROP TABLE "users_roles"`);
        await queryRunner.query(`ALTER TABLE "temporary_users_roles" RENAME TO "users_roles"`);
        await queryRunner.query(`CREATE INDEX "IDX_deeb1fe94ce2d111a6695a2880" ON "users_roles" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_21db462422f1f97519a29041da" ON "users_roles" ("rolesId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_21db462422f1f97519a29041da"`);
        await queryRunner.query(`DROP INDEX "IDX_deeb1fe94ce2d111a6695a2880"`);
        await queryRunner.query(`ALTER TABLE "users_roles" RENAME TO "temporary_users_roles"`);
        await queryRunner.query(`CREATE TABLE "users_roles" ("usersId" integer NOT NULL, "rolesId" integer NOT NULL, PRIMARY KEY ("usersId", "rolesId"))`);
        await queryRunner.query(`INSERT INTO "users_roles"("usersId", "rolesId") SELECT "usersId", "rolesId" FROM "temporary_users_roles"`);
        await queryRunner.query(`DROP TABLE "temporary_users_roles"`);
        await queryRunner.query(`CREATE INDEX "IDX_21db462422f1f97519a29041da" ON "users_roles" ("rolesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_deeb1fe94ce2d111a6695a2880" ON "users_roles" ("usersId") `);
        await queryRunner.query(`DROP INDEX "IDX_21db462422f1f97519a29041da"`);
        await queryRunner.query(`DROP INDEX "IDX_deeb1fe94ce2d111a6695a2880"`);
        await queryRunner.query(`DROP TABLE "users_roles"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}
