import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaCards from "./ListaCards";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { crearColor, leerColores } from "../helpers/queries.js";
import Swal from "sweetalert2";

const FormularioColores = () => {

  const [colores, setColores] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    obtenerColores()
  }, []);

  const obtenerColores = async() =>{
    const respuesta = await leerColores()
    if(respuesta.status===200){
      const datos = await respuesta.json()
      setColores(datos)
      }else{
      console.info('Ocurrio un error al buscar los colores')
    }
  }

  const agregarColor = async(nuevoColor) => {
   const respuesta = await crearColor(nuevoColor)
    if(respuesta.status===200){
      Swal.fire({
          title: "Tarea agregada!",
          text: `Se agrego ${nuevoColor.inputColor} a la lista.`,
          icon: "success",
        });
        reset();
        obtenerColores()
    }
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
          <ListaCards colores={colores}/>
        </div>
      </section>
    </>
  );
};

export default FormularioColores;
