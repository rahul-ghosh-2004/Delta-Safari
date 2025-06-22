import { Router } from "express";
import { signup, login } from "../controllers/user.controller.js";

const router = Router()

router.route("/signup").post(signup)

export default router