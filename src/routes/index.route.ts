import express from "express";
import { userController } from "../controllers/user.controller";

const router = express.Router();
router.post("/users", userController.create);
router.patch("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);
router.get("/users/:id", userController.findById);
router.get("/users", userController.search);

export default router;
