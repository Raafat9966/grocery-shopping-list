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
			{items
				.sort((a, b) => a.priority - b.priority)
				.map((item) => (
					<List
						item={item}
						key={item._id}
						items={items}
						setItems={setItems}
					/>
				))}
		</div>
	);
}

export default Interface;
