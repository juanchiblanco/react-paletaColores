import { Button, ListGroup, Card} from "react-bootstrap";

const CardColor = () => {
    return (
            <Card className="col-12 col-md-4 col-lg-3 bg-dark-subtle">
      <Card.Body className="text-center">
        <Card.Title>Color</Card.Title>
        <Card.Text>
            <div className="divColor"></div>
          #a12
        </Card.Text>
        <Button variant="danger">Borrar</Button>
      </Card.Body>
    </Card>
    );
};

export default CardColor;