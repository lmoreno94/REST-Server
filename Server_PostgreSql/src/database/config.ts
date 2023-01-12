import { DataSource } from "typeorm";
import { User } from '../entities/User';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "root",
    password: "root",
    database: "typeorm_node",
    synchronize: true,
    entities: [User],
    logging: true,
    subscribers: [],
    migrations: [],
})