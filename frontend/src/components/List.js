import axios from "axios";
import React from "react";

function List({ item }) {
	const handleDelete = () => {
		axios.delete(`http://localhost:5000/${item.name}`);
	};

	return (
		<div>
			<ul>
				<li>
					<p>
						<span>{item.priority} </span>
						{item.name}
					</p>
					<i className="fas fa-edit"></i>
					<a onClick={handleDelete}>
						<i className="fas fa-trash-alt"></i>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default List;
