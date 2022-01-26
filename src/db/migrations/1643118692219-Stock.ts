import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class Stock1643118692219 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
          name: 'stock',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true,
            },
            {
              name: 'quantity',
              type: 'int',
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
    await queryRunner.dropTable('stock');
  }
}
