import React from "react";
import axios from "axios";
import { Form, Col, Button } from "react-bootstrap";

function Inputs() {
	const [input, setInput] = React.useState({ name: "", priority: 1 });
	const submitHandler = (e) => {
		e.preventDefault();
		axios.post("http://localhost:5000/add", input).then((res) => {});
		setInput({ name: "", priority: 1 });
	};

	return (
		<div className="w-50">
			<Form onSubmit={submitHandler}>
				<Form.Row className="align-items-center">
					<Col xs="auto" className="my-1">
						<Form.Label htmlFor="inlineFormInputName" srOnly>
							item name
						</Form.Label>
						<Form.Control
							id="inlineFormInputName"
							placeholder="item name"
							onChange={(e) =>
								setInput({ ...input, name: e.target.value })
							}
							value={input.name}
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
								setInput({ ...input, priority: e.target.value })
							}
							value={input.priority}
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
	);
}

export default Inputs;
