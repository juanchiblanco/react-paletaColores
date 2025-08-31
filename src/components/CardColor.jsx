import { Button, Card, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarColorID, editarColor, leerColores } from "../helpers/queries.js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import 'bootstrap-icons/font/bootstrap-icons.css';

const CardColor = ({color, setColores}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setValue("inputColor", color.inputColor);
    setShow(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const eliminarColor = () => {
    Swal.fire({
      title: "Eliminar color?",
      text: "No puedes revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#277a35ff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarColorID(color._id);
        if (respuesta.status===200) {
          Swal.fire({
            title: "Color eliminado!",
            text: `El color ${color.inputColor} fue eliminado correctamente`,
            icon: "success",
          });
          const respuestaColores = await leerColores();
          const coloresActualizados = await respuestaColores.json();
          setColores(coloresActualizados);
        } else {
          Swal.fire({
            title: "Error al eliminar el color!",
            text: `El color ${color.inputColor} no pudo ser eliminado`,
            icon: "error",
          });
        }
      }
    });
  };

  const actualizarColor = async (data) => {
    const respuesta = await editarColor(data, color._id);
    if (respuesta.status === 200) {
      Swal.fire({
        title: "Color actualizado",
        text: `El color ${data.inputColor} fue actualizado correctamente.`,
        icon: "success",
      });
      const respuestaColores = await leerColores();
      const coloresActualizados = await respuestaColores.json();
      setColores(coloresActualizados);

      handleClose();
    }
  };

  return (
    <>
    <Card className="col-12 col-md-4 col-lg-3 bg-dark-subtle">
      <Card.Body className="text-center">
        <Card.Title>{color.inputColor}</Card.Title>
        <div className="divColor" style={{backgroundColor: color.inputColor}}></div>
        <div className="d-flex justify-content-center">
        <Button
          variant="primary"
          className="me-2 text-light"
          onClick={handleShow}
        >
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" onClick={eliminarColor}>
          <i className="bi bi-trash"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Text>Color: {color.inputColor}</Form.Text>
          <Form.Control
                defaultValue=""
                type="color"
                className="w-100 my-3"
                {...register("inputColor")}
              />
          <Form.Text className="text-danger">
          {errors.inputColor?.message}
        </Form.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit(actualizarColor)}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
};

export default CardColor;
