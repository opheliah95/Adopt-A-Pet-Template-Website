import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Animals";
import React from "react";
import { animals } from "./Animals";

class SingleCard extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Test Name",
      description: "Test description",
      species: 'test'
    };
  }
  render() {
    return (
      <div>
        {animals.map((item) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Species: {item.species}</Card.Text>
                <Button variant="primary">More Info</Button>
              </Card.Body>
            </Card>
          );
        })}
        )
      </div>
    );
  }
}

export default SingleCard;
