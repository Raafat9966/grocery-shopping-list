import React from "react";
import axios from "axios";
import Inputs from "./Inputs";
import List from "./List";

function Interface() {
	const [items, setItems] = React.useState([]);
	React.useEffect(() => {
		axios
			.get("http://localhost:5000/api")
			.then((result) => {
				setItems(result.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [items]);

	return (
		<div className="container d-flex flex-column justify-content-center align-items-center">
			<Inputs />
			<div className="w-50">
				<ul>
					{items
						.sort((a, b) => a.priority - b.priority)
						.map((item) => (
							<List item={item} key={item._id} />
						))}
				</ul>
			</div>
		</div>
	);
}

export default Interface;
