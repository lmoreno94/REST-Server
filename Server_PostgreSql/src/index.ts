import "reflect-metadata"
import app from "./app";
import { AppDataSource } from "./database/config";

(async() => {
    await AppDataSource.initialize();
    app.listen(3000);
    console.log('Hello Word Tsc')
})();