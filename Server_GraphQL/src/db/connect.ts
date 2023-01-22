import { DataSource } from "typeorm";
import 'dotenv/config';

const cleanFileName = (fileName: string) => {
    const file = fileName.split("/db").shift();
    return file;
}

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.MYSQL_ROOT_HOST,
    port: Number(process.env.MYSQL_PORT_API),
    username: process.env.PMA_USER,
    password: process.env.PMA_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: true,
    logging: true,
    entities: [
        `${cleanFileName(__dirname)}/entities/*.ts`
    ],
    subscribers: [],
    migrations: [],
    ssl: false
})