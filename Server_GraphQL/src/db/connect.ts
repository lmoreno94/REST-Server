import { DataSource } from "typeorm";

const cleanFileName = (fileName: string) => {
    const file = fileName.split("/db").shift();
    return file;
}

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "mysql",
    port: 3306,
    username: "root",
    password: "root123456",
    database: "graphql_typeorm",
    synchronize: true,
    logging: true,
    entities: [
        `${cleanFileName(__dirname)}/entities/*.ts`
    ],
    subscribers: [],
    migrations: [],
    ssl: false
})