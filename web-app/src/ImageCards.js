import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import animals from "./Animals";
import React from "react";

class SingleCard extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Test Name",
      description: "Test description",
    };
  }
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{this.state.name}</Card.Title>
          <Card.Text>{this.state.description}</Card.Text>
          <Button variant="primary">More Info</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleCard;
