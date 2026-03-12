import { prisma } from "../utils/prisma";

export const userService = {
  async findById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
    });
  },

  async search(text: string) {
    return prisma.user.findMany({
      where: {
        username: {
          contains: text,
        },
      },
    });
  },

  async create(body: {
    fullname: string;
    username: string;
    bio: string;
    phone: string;
  }) {
    return await prisma.user.create({
      data: body,
    });
  },

  async update(
    body: { fullname: string; username: string; bio: string; phone: string },
    id: number,
  ) {
    return await prisma.user.update({
      where: {
        id,
      },
      data: body,
    });
  },

  async delete(id: number) {
    return await prisma.user.delete({
      where: { id },
    });
  },
};
