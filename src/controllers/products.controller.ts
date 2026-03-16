import { Response, Request } from "express";
import { productService } from "../services/products.service";

export const productController = {
  index: async (req: Request, res: Response) => {
    const products = await productService.index();
    res.json({ products });
  },

  findById: async (req: Request, res: Response) => {
    const id = req.params.id;
    const product = await productService.findById(+id!);
    res.json({ product });
  },

  create: async (req: Request, res: Response) => {
    try {
      const product = await productService.create(req.body);
      res.json({ product });
    } catch (error: any) {
      // console.log(error);
      if (error.code === "P2002") {
        return res.status(400).json({
          message: "Product already exists",
        });
      }
    }
  },

  delete: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await productService.delete(id);
    res.json({ message: "Delete Successed!" });
  },

  updateAll: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const product = await productService.updateAll(id, req.body);
    res.json({ product });
  },

  updatePartical: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const product = await productService.updateAll(id, req.body);
    res.json({ product });
  },
};
