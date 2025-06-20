import "bootstrap/dist/css/bootstrap.min.css";
import FormularioColores from "./components/FormularioColores";

function App() {

  return (
    <>
    <main className="container my-4">
      <h1 className="text-center">Paleta de Colores</h1>
      <FormularioColores/>
    </main>
      <footer className="bg-dark text-light text-center py-3">
        <p>&copy;Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
