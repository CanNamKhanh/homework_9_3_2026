import { Response, Request } from "express";
import { userService } from "../services/user.service";
import test from "node:test";

export const userController = {
  create: async (req: Request, res: Response) => {
    try {
      const user = await userService.create(req.body);
      res.json({ user });
    } catch (error: any) {
      if (error.code === "P2002") {
        return res.status(400).json({
          message: "Username already exists",
        });
      }

      res.status(500).json({ message: "Server error" });
    }
  },

  update: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await userService.update(req.body, id);
    res.json({ user });
  },

  findById: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await userService.findById(id);
    res.json({ user });
  },

  search: async (req: Request, res: Response) => {
    const q = req.query.q as string;
    try {
      const users = await userService.search(q);
      if (users.length === 0) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      res.json({ users });
    } catch (error) {
      res.status(500).json({
        message: "Server error",
      });
    }
  },

  delete: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await userService.delete(id);
    res.json({ message: "Delete Successed!" });
  },
};
