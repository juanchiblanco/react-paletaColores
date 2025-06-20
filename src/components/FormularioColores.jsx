import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormularioColores = () => {
    return (
        <section className='container d-flex justify-content-center bg-warning p-3 w-50 rounded'>
            <Form>
      <Form.Group className="mb-3" controlId="color">
        <Form.Label>Colores</Form.Label>
        <Form.Control type="color" placeholder="Ingresa un color" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Agregar color
      </Button>
    </Form>
        </section>
    );
};

export default FormularioColores;