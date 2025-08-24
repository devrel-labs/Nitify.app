import express from "express";
import { registerNitifyShareLink, handleNitifyShareLink } from "../controllers/share.controller";
import { userMiddleware } from "../middlewares/user.middleware";

const router = express.Router();

router.post("/share",userMiddleware, registerNitifyShareLink);
router.get("/share/:sharelink", handleNitifyShareLink);

export default router;