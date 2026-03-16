import { prisma } from "../utils/prisma";

export const attributeService = {
  async index() {
    return await prisma.attributes.findMany({});
  },

  async getValue(id: number) {
    return await prisma.attributes.findUnique({
      where: {
        id,
      },
      include: {
        attribute_values: {
          select: {
            id: true,
            value: true,
          },
        },
      },
    });
  },

  async createAttribute(body: { name: string }) {
    return await prisma.attributes.create({
      data: body,
    });
  },

  async updateAttribute(id: number, body: { name: string }) {
    return await prisma.attributes.update({
      where: {
        id,
      },
      data: body,
    });
  },

  async deleteAttribute(id: number) {
    return await prisma.attributes.delete({
      where: { id },
    });
  },

  async createAttributeValue(attribute_id: number, body: { value: string }) {
    return await prisma.attributeValue.create({
      data: {
        attribute_id: attribute_id,
        value: body.value,
      },
    });
  },

  async deleteAttributeValue(attribute_id: number, value_id: number) {
    return await prisma.attributeValue.delete({
      where: {
        attribute_id: attribute_id,
        id: value_id,
      },
    });
  },
};
