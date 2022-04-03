import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import animals from './Animals';

function SingleCard(name="Test", description="Test") {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>{this.name}</Card.Title>
        <Card.Text>
        {this.description}
        </Card.Text>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>
  )

}


export default SingleCard;