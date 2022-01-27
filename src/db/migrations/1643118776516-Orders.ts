import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class Orders1643118776516 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
          name: 'orders',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
            },
            {
              name: 'product_id',
              type: 'varchar',
            },
            {
              name: 'customer_id',
              type: 'varchar',
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
              columnNames: ['customer_id'],
              referencedTableName: 'customers',
              referencedColumnNames: ['id'],
            },
            {
              name: 'fk_order_product',
              columnNames: ['product_id'],
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
