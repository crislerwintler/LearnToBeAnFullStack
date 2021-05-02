import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProductTable1619867414320 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'customer',
            type: 'varchar',
          },
          {
            name: 'model',
            type: 'varchar',
          },
          {
            name: 'reference',
            type: 'int',
          },
          {
            name: 'quantity',
            type: 'number',
          },
          {
            name: 'price',
            type: 'double precision',
          },
          {
            name: 'sizes',
            type: 'varchar',
          },
          {
            name: 'thread',
            type: 'int',
          },
          {
            name: 'threadColor',
            type: 'varchar',
          },
          {
            name: 'wash',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
