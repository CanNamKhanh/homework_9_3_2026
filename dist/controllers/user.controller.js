import { userService } from "../services/user.service";
export const userController = {
    create: async (req, res) => {
        const user = await userService.create(req.body);
        res.json({ user });
    },
    findById: async (req, res) => {
        const id = Number(req.params.id);
        const user = await userService.find(id);
        res.json({ user });
    },
};
//# sourceMappingURL=user.controller.js.map