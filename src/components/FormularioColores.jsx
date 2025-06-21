import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaCards from "./ListaCards";
import { useState } from "react";

const FormularioColores = () => {

  const [color, setColor] = useState('')
  const [colores, setColores] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setColores([...colores, color])
    setColor('')
  }

  const borrarColor = (nombreColor) => {
    const coloresFiltrado = colores.filter((item)=> item !== nombreColor)
    setColores(coloresFiltrado)
  }

  return (
    <>
      <section className="container row justify-content-center">
        <Form onSubmit={handleSubmit} className="bg-dark-subtle my-3 w-75 rounded shadow col-12">
          <div className="formColores">
            <Form.Group className="mb-3 w-100" controlId="color">
              <Form.Label className="lead text-light">
                Elige un color
              </Form.Label>
              <Form.Control type="color" className="w-100 my-3" onChange={(e)=> setColor(e.target.value)} value={color}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Agregar color
            </Button>
          </div>
        </Form>
        <div className="w-75 border border-0">
          <ListaCards colores={colores} borrarColor={borrarColor}/>
        </div>
      </section>
    </>
  );
};

export default FormularioColores;
