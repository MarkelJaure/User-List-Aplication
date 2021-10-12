import { Router } from "express";
import UsersController from "../controllers/UsersController";

const router = Router();

router.get("/users", UsersController.index);

export default router;
