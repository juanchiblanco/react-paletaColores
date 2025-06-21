import { Button, ListGroup, Card } from "react-bootstrap";

const CardColor = ({nombreColor}) => {
  return (
    <Card className="col-12 col-md-4 col-lg-3 bg-dark-subtle">
      <Card.Body className="text-center">
        <Card.Title>{nombreColor}</Card.Title>
        <div className="divColor" style={{backgroundColor: nombreColor}}></div>
        <Button variant="danger">Borrar</Button>
      </Card.Body>
    </Card>
  );
};

export default CardColor;
