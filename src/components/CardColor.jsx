import { Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarColorID, leerColores } from "../helpers/queries.js";

const CardColor = ({color, setColores}) => {

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
            text: `La tarea ${color.inputColor} fue eliminado correctamente`,
            icon: "success",
          });
          const respuestaColores = await leerColores();
          const coloresActualizados = await respuestaColores.json();
          setColores(coloresActualizados);
        } else {
          Swal.fire({
            title: "Error al eliminar el color!",
            text: `La tarea ${color.inputColor} no pudo ser eliminado`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <Card className="col-12 col-md-4 col-lg-3 bg-dark-subtle">
      <Card.Body className="text-center">
        <Card.Title>{color.inputColor}</Card.Title>
        <div className="divColor" style={{backgroundColor: color.inputColor}}></div>
        <Button variant="danger" onClick={eliminarColor}>Borrar</Button>
      </Card.Body>
    </Card>
  );
};

export default CardColor;
