import React from "react";
import axios from "axios";
import { Form, Col, Button } from "react-bootstrap";

function List({ item }) {
	const [edit, setEdit] = React.useState(false);
	const [newItem, setNewItem] = React.useState({ name: "", priority: 1 });
	const handleDelete = () => {
		axios.delete(`http://localhost:5000/api/${item.name}`);
	};
	const handleEdit = () => {
		setEdit(!edit);
	};

	const purchased = () => {
		axios
			.put(`http://localhost:5000/purchased/api/${item._id}`, {
				purchase: !item.purchase,
			})
			.then(() => console.log(item.purchase));
	};

	const submitUpdate = (e) => {
		e.preventDefault();
		axios
			.put(`http://localhost:5000/api/${item._id}`, newItem)
			.then(() => setEdit(false));
	};
	return (
		<>
			{!item.purchase ? (
				<li className="notPurchased d-flex flex-flex-column">
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" onClick={purchased} />
					</Form.Group>
					<p>
						{item.name}
						<span>{item.priority} </span>
					</p>

					<a onClick={handleEdit}>
						<i className="fas fa-edit"></i>
					</a>
					<a onClick={handleDelete}>
						<i className="fas fa-trash-alt"></i>
					</a>

					{edit && (
						<div>
							<Form onSubmit={submitUpdate}>
								<Form.Row className="align-items-center">
									<Col xs="auto" className="my-1">
										<Form.Label
											htmlFor="inlineFormInputName"
											srOnly
										>
											item name
										</Form.Label>
										<Form.Control
											id="inlineFormInputName"
											placeholder="item name"
											onChange={(e) =>
												setNewItem({
													...newItem,
													name: e.target.value,
												})
											}
											value={newItem.name}
											required
										/>
									</Col>
									<Col xs="auto" className="my-1">
										<Form.Label
											className="mr-sm-2"
											htmlFor="inlineFormCustomSelect"
											srOnly
										>
											Priority
										</Form.Label>
										<Form.Control
											as="select"
											className="mr-sm-2"
											id="inlineFormCustomSelect"
											custom
											onChange={(e) =>
												setNewItem({
													...newItem,
													priority: e.target.value,
												})
											}
											value={newItem.priority}
										>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</Form.Control>
									</Col>
									<Col xs="auto" className="my-1">
										<Button type="submit">Submit</Button>
									</Col>
								</Form.Row>
							</Form>
						</div>
					)}
				</li>
			) : (
				<li className="purchased">
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" onClick={purchased} />
					</Form.Group>
					<p>
						{item.name}
						<span>{item.priority} </span>
					</p>
					<a onClick={handleDelete}>
						<i className="fas fa-trash-alt"></i>
					</a>
				</li>
			)}
		</>
	);
}

export default List;
