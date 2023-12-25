import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Amount from './amount';

function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Mint Amount</Card.Title>
        <Card.Text>
          Each NFT = 0.06ETH 
        </Card.Text>
        <Amount />
        <Button variant="primary" value = symAmount></Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;