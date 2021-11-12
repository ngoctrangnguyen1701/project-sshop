import { Router } from "express";

import ShopCallback from "../controller/Shop";
const ShopRouter = Router();

ShopRouter.get("/", ShopCallback.get);
ShopRouter.post("/", ShopCallback.create);
ShopRouter.put("/:id", ShopCallback.update);
ShopRouter.delete("/:id", ShopCallback.delete);

export default ShopRouter


