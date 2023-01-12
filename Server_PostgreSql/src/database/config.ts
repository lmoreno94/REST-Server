import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "root",
    password: "root",
    database: "root",
    synchronize: true,
    entities: [],
    logging: true,
    subscribers: [],
    migrations: [],
})