import mongoose from "mongoose";

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	priority: {
		type: Number,
	},
	isDone: {
		type: Boolean,
		default: false,
	},
});

const Item = mongoose.connection.model("items", schema);

export default Item;
