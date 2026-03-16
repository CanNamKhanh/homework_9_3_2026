import { prisma } from "../utils/prisma";

export const productService = {
  async index() {
    return await prisma.products.findMany({});
  },

  async findById(id: number) {
    return await prisma.products.findUnique({
      where: {
        id,
      },
      include: {
        productsAttributesValues: {
          select: {
            attribute_value: {
              select: {
                value: true,
                attribute: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  },

  async create(body: {
    name: string;
    descriptions: string;
    price: number;
    stock: number;
  }) {
    return await prisma.products.create({
      data: body,
    });
  },

  async delete(id: number) {
    return await prisma.products.delete({
      where: { id },
    });
  },

  async updateAll(
    id: number,
    body: {
      name: string;
      descriptions: string;
      price: number;
      stock: number;
    },
  ) {
    return await prisma.products.update({
      where: {
        id,
      },
      data: body,
    });
  },

  async updatePartial(
    id: number,
    body: {
      name?: string;
      descriptions?: string;
      price?: number;
      stock?: number;
    },
  ) {
    return await prisma.products.update({
      where: {
        id,
      },
      data: body,
    });
  },
};
