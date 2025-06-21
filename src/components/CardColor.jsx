import { Button, ListGroup } from "react-bootstrap";

const CardColor = () => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">Card<Button type="button" variant="danger">Borrar</Button>
    </ListGroup.Item>
    );
};

export default CardColor;