import express from "express";
import { addUserContent, getUserContent, deleteUserContent } from "../controllers/content.controller";
import { userMiddleware } from "../middlewares/user.middleware";

const router = express.Router();

router.post("/", userMiddleware, addUserContent)
router.get("/", userMiddleware, getUserContent);
router.delete("/", userMiddleware, deleteUserContent)

export default router;