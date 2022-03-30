import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SingleCard() {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Sample Animal</Card.Title>
        <Card.Text>
          This is the sample card element
        </Card.Text>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>
  )

}
export default SingleCard;