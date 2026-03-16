import express from "express";
import { productController } from "../controllers/products.controller";
import { attributeController } from "../controllers/attribute.controller";
import { createProductSchema } from "../validators/createProductSchema.validator";
import { validate } from "../middlewares/validate.middleware";
import { upudateProductSchema } from "../validators/updateProductSchema.validator";
import { createAttributeSchema } from "../validators/createAttributeSchema.validate";
import { updateAttributeSchema } from "../validators/updateAttributeSchema.schema";
import { createAttributeValueSchema } from "../validators/createAttributeValueSchema.schema";

const router = express.Router();
// router.post("/users", userController.create);
// router.patch("/users/:id", userController.update);
// router.delete("/users/:id", userController.delete);
// router.get("/users/:id", userController.findById);
// router.get("/users", userController.search);
router.get("/products", productController.index);
router.get("/products/:id", productController.findById);
router.post(
  "/products",
  validate(createProductSchema),
  productController.create,
);
router.delete("/products/:id", productController.delete);
router.put(
  "/products/:id",
  validate(upudateProductSchema),
  productController.updateAll,
);
router.patch(
  "/products/:id",
  validate(upudateProductSchema),
  productController.updatePartical,
);

router.get("/attributes", attributeController.index);
router.get("/attributes/:id", attributeController.getValue);
router.post(
  "/attributes",
  validate(createAttributeSchema),
  attributeController.createAttribute,
);
router.put(
  "/attributes/:id",
  validate(updateAttributeSchema),
  attributeController.updateAttribute,
);
router.delete("/attributes/:id", attributeController.deleteAttribute);
router.post(
  "/attributes/:id/values",
  validate(createAttributeValueSchema),
  attributeController.createAttributeValue,
);
router.delete(
  "/attributes/:id/values/:valuesId",
  attributeController.deleteAttributeValue,
);

export default router;
