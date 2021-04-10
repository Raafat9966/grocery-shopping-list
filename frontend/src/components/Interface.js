import React from "react";
import axios from "axios";
import Inputs from "./Inputs";
import List from "./List";

function Interface() {
	const [items, setItems] = React.useState([]);
	React.useEffect(() => {
		axios
			.get("http://localhost:5000")
			.then((result) => {
				setItems(result.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [items]);
	return (
		<div>
			<Inputs />
			{items.map((item) => (
				<List item={item} key={item._id} />
			))}
		</div>
	);
}

export default Interface;
