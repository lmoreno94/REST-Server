import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "mysql",
    port: 3306,
    username: "root",
    password: "root123456",
    database: "graphql_typeorm",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})