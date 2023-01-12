import { Router } from "express";
import CUser from "../controllers/User";

const router = Router();

router.get("/users", CUser.getUsers);
router.get("/user/:id", CUser.getUser);
router.post("/user", CUser.postUser);
router.put("/user/:id", CUser.putUser);
router.delete("/user/:id", CUser.deleteUser);

export default router