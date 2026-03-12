import { prisma } from "../utils/prisma";
export const userService = {
    async find(id) {
        return await prisma.user.findUnique({
            where: { id },
        });
    },
    async create(body) {
        return await prisma.user.create({
            data: body,
        });
    },
    async update(body, id) {
        return await prisma.user.update({
            where: {
                id,
            },
            data: body,
        });
    },
    async delete(id) {
        return await prisma.user.delete({
            where: { id },
        });
    },
};
//# sourceMappingURL=user.service.js.map