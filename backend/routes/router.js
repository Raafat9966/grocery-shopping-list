import express from "express";
import items from "../controllers/index.js";

const router = express.Router();

router.get("/", items.getAllItems);
router.post("/add", items.createItem);
router.put("/:id", items.updateItem);
router.put("/purchased/:id", items.purchasedItem);
router.delete("/:name", items.removeItem);

export default router;
