import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1771569783703 implements MigrationInterface {
    name = 'InitMigration1771569783703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Inbox" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "messageId" character varying NOT NULL, "handler" character varying NOT NULL, CONSTRAINT "PK_bb34f42fe318b185796b7e751fc" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Inbox"`);
    }

}
