# API Rest para microsserviço 

## Requisitos da Aplicação
[] Cadastrar Peças para produção
- id do Modelo
- Nome do Modelo
- Classe de peça
- Quantidade de peças
- Cor de linha
- Lavagem
- Observações

[] Cadastrar procesos
- id do Modelo
- Nome do Processo
- Tempo do Processo
- Numero do processo
- Mult X2? boolean

[] Cadastrar colaborador
- id do colaborador
- nome do colaborador
- telefone do colaborador
- email do colaborador
- senha de acesso

[] Cadastrar execução de Processo
- id do colaborador
- id do processo
- quantidade 
- mult x2 ? boolean
- horario de inicio
- horario de finalização
- Observações


# Typorm commands
Commands:
  cli.js schema:sync         Synchronizes your entities with
                             database schema. It runs schema
                             update queries on all connections
                             you have. To run update queries on
                             a concrete connection use -c
                             option.
  cli.js schema:log          Shows sql to be executed by
                             schema:sync command. It shows sql
                             log only for your default
                             connection. To run update queries
                             on a concrete connection use -c
                             option.
  cli.js schema:drop         Drops all tables in the database
                             on your default connection. To
                             drop table of a concrete
                             connection's database use -c
                             option.
  cli.js query [query]       Executes given SQL query on a
                             default connection. Specify
                             connection name to run query on a
                             specific connection.
  cli.js entity:create       Generates a new entity.
  cli.js subscriber:create   Generates a new subscriber.
  cli.js migration:create    Creates a new migration file.
                                   [aliases: migrations:create]
  cli.js migration:generate  Generates a new migration file
                             with sql needs to be executed to
                             update schema.
                                 [aliases: migrations:generate]
  cli.js migration:run       Runs all pending migrations.
                                      [aliases: migrations:run]
  cli.js migration:show      Show all migrations and whether
                             they have been run or not
  cli.js migration:revert    Reverts last executed migration.
                                   [aliases: migrations:revert]
  cli.js version             Prints TypeORM version this
                             project uses.
  cli.js cache:clear         Clears all data stored in query
                             runner cache.
  cli.js init                Generates initial TypeORM project
                             structure. If name specified then
                             creates files inside directory
                             called as name. If its not
                             specified then creates files
                             inside current directory.