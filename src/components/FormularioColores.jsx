import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaCards from "./ListaCards";

const FormularioColores = () => {
  return (
    <>
      <section className="container row justify-content-center">
        <Form className="bg-dark-subtle my-3 w-75 rounded shadow col-12">
          <div className="formColores">
            <Form.Group className="mb-3 w-100" controlId="color">
              <Form.Label className="lead text-light">
                Elige un color
              </Form.Label>
              <Form.Control type="color" className="w-100 my-3" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Agregar color
            </Button>
          </div>
        </Form>
        <div className="w-75 border border-0">
          <ListaCards />
        </div>
      </section>
    </>
  );
};

export default FormularioColores;
