import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class Orders1643118776516 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
          name: 'orders',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true,
            },
            {
              name: 'productId',
              type: 'varchar',
            },
            {
              name: 'customerId',
              type: 'varchar',
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
          foreignKeys: [
            {
              name: 'fk_order_customer',
              columnNames: ['customerId'],
              referencedTableName: 'customers',
              referencedColumnNames: ['id'],
            },
            {
              name: 'fk_order_product',
              columnNames: ['productId'],
              referencedTableName: 'stock',
              referencedColumnNames: ['id'],
            },
          ],
        }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders');
  }
}
