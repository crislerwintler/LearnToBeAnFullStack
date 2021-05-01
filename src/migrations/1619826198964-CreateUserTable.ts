import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1619826198964 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
                new Table ({
                name: 'users', 
                columns: [
                    { 
                        name: 'id',
                        type:  'int', 
                        isPrimary: true, 
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                   {
                       name: 'firstName', 
                       type: 'varchar',
                   },
                   {
                       name: 'lastName',
                       type: 'varchar',
                   },
                   {
                       name: 'email',
                       type: 'varchar'
                   },
                   {
                       name: 'phone',
                       type: 'double precision'
                   },
                   {
                       name: 'isActive',
                       type: 'boolean'
                   },
                   {
                       name: 'created_at',
                       type: 'timestamp',
                       default: 'CURRENT_TIMESTAMP'
                   }

                ]
                })
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
