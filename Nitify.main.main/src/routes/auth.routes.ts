import express from "express";
import { registerUser, loginUser, checkUserAuthenticated, getUserCredentials } from "../controllers/auth.controller";
import { userMiddleware } from "../middlewares/user.middleware";

const router = express.Router();

router.post("/signup", registerUser)
router.post("/signin", loginUser)
router.get("/auth/check", userMiddleware, checkUserAuthenticated)
router.get("/nitify/userCredentials", userMiddleware, getUserCredentials)

export default router;