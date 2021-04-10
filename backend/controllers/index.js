import { nextTick } from "node:process";
import Item from "../models/items.model.js";

const getAllItems = async (req, res, next) => {
	try {
		let items = await Item.find();
		res.status(200).send(items);
	} catch (err) {
		next(err);
	}
};

const createItem = async (req, res, next) => {
	try {
		let { name, priority, isDone } = req.body;
		let item = new Item({
			name,
			priority,
			isDone,
		});
		await item.save();
		res.status(201).send(item);
	} catch (err) {
		next(err);
	}
};

const updateItem = async (req, res, next) => {
	try {
		let { name, priority } = req.body;
		let item = await Item.findByIdAndUpdate(
			{ _id: req.params.id },
			{ name, priority },
			{ new: true }
		);
		res.status(200).send(item);
	} catch (err) {
		next(err);
	}
};

const removeItem = async (req, res, next) => {
	try {
		await Item.deleteOne({ name: req.params.name });
		res.status(204).json({ message: "Item deleted" });
	} catch (err) {}
};

export default { getAllItems, createItem, updateItem, removeItem };
