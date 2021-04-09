import express from "express";
import items from "../controllers/index.js";

const router = express.Router();

router.get("/", items.getAllItems);
router.post("/", items.createItem);

// router.get("/", (req, res) => res.json({ message: "test" }));

export default router;
