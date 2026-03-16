import { Response, Request } from "express";
import { productService } from "../services/products.service";
import { attributeService } from "../services/attributes.service";

export const attributeController = {
  index: async (req: Request, res: Response) => {
    const attributes = await attributeService.index();
    res.json({ attributes });
  },

  getValue: async (req: Request, res: Response) => {
    const id = req.params.id;
    const attributeValues = await attributeService.getValue(+id!);
    res.json({ attributeValues });
  },

  createAttribute: async (req: Request, res: Response) => {
    try {
      const attribute = await attributeService.createAttribute(req.body);
      res.json({ attribute });
    } catch (error: any) {
      // console.log(error);
      if (error.code === "P2002") {
        return res.status(400).json({
          message: "Attribute already exists",
        });
      }
    }
  },

  updateAttribute: async (req: Request, res: Response) => {
    const id = req.params.id;
    const attribute = await attributeService.updateAttribute(+id!, req.body);
    res.json({ attribute });
  },

  deleteAttribute: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await attributeService.deleteAttribute(id);
    res.json({ message: "Delete Successed!" });
  },

  createAttributeValue: async (req: Request, res: Response) => {
    const id = req.params.id;
    const attributeValue = await attributeService.createAttributeValue(
      +id!,
      req.body,
    );
    res.json({ attributeValue });
  },

  deleteAttributeValue: async (req: Request, res: Response) => {
    const attributeId = req.params.id;
    const valueId = req.params.value_id;
    await attributeService.deleteAttributeValue(+attributeId!, +valueId!);
    res.json({ message: "Delete Successed!" });
  },
};
