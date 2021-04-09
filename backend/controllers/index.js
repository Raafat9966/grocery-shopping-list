import { nextTick } from "node:process";
import Item from "../models/items.js";

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

export default { getAllItems, createItem };
