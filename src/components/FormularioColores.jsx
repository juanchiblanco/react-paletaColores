import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormularioColores = () => {
    return (
        <section className='container d-flex justify-content-center'>
            <Form className='bg-dark-subtle my-3 w-75 rounded shadow'>
                <div className='divColores'>
      <Form.Group className="mb-3 w-100" controlId="color">
        <Form.Label className='lead text-light'>Elige un color</Form.Label>
        <Form.Control type="color" className='w-100 my-3'/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Agregar color
      </Button>
      </div>
    </Form>
        </section>
    );
};

export default FormularioColores;