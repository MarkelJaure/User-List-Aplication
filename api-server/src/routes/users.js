import { Router } from "express";
import UsersController from "../controllers/UsersController";
import Authorize from "../middleware/Authorize";

const router = Router();

router.get("/users", UsersController.index);
router.get("/users/all", UsersController.findAll);

export default router;
