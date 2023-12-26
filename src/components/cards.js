
import Card from 'react-bootstrap/Card';
import Amount from './amount';
import glogo from './glsdefiAlphaimg.png';


function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" width = "300px" src={glogo} />
      <Card.Body>
        <Card.Title>Mint Amount...</Card.Title>
        <Card.Text>
          Each NFT = 0.06ETH
        </Card.Text>
        <Amount />
      </Card.Body>
    </Card>
  );
}

export default Cards;