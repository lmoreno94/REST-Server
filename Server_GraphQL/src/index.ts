import "reflect-metadata";
import app from "./app";

const PORT = 3000;

(async() => {
    app.listen(PORT, () => {
        console.log(`Server on port ${PORT}`);
    })
})();