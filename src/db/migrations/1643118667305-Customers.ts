import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class Customers1643118667305 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
          name: 'customers',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true,
            },
            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'user',
              type: 'varchar',
            },
            {
              name: 'password',
              type: 'varchar',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
        }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('customers');
  }
}
