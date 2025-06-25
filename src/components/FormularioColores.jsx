import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaCards from "./ListaCards";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const FormularioColores = () => {
  const coloresLocalStorage = JSON.parse(localStorage.getItem("listaColores")) || []
  const [colores, setColores] = useState(coloresLocalStorage);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    localStorage.setItem("listaColores", JSON.stringify(colores));
  }, [colores]);

  const agregarColor = (data) => {
    setColores([...colores, data.inputColor]);
    reset();
  };

  const borrarColor = (nombreColor) => {
    const coloresFiltrado = colores.filter((item) => item !== nombreColor);
    setColores(coloresFiltrado);
  };

  return (
    <>
      <section className="container row justify-content-center">
        <Form
          onSubmit={handleSubmit(agregarColor)}
          className="bg-dark-subtle my-3 w-75 rounded shadow col-12"
        >
          <div className="formColores">
            <Form.Group className="mb-3 w-100" controlId="color">
              <Form.Label className="lead text-light">
                Elige un color
              </Form.Label>
              <Form.Control defaultValue=""
                type="color"
                className="w-100 my-3"
                {...register("inputColor", {
                  required: "El color es un dato obligatorio",
                })}
              />
            </Form.Group>
            <Form.Text className="text-danger">
              {errors.inputColor?.message}
            </Form.Text>
            <Button variant="primary" type="submit">
              Agregar color
            </Button>
          </div>
        </Form>
        <div className="w-75 border border-0">
          <ListaCards colores={colores} borrarColor={borrarColor} />
        </div>
      </section>
    </>
  );
};

export default FormularioColores;
