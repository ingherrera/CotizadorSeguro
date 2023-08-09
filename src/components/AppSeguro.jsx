// import useCotizador from "../hooks/useCotizador"
import { useSelector } from "react-redux";
import Formulario from "./Formulario";
import Resumen from "./Resumen";
import Spinner from "./Spinner";

function AppSeguro() {
  // const { cargando } = useCotizador()

  const { cargando } = useSelector((state) => state.cotizador);

  //console.log({cargando})
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">Cotizador de Seguros de Auto</h1>
      </header>
      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Formulario />
        {cargando ? <Spinner /> : <Resumen />}
      </main>
    </>
  );
}

export default AppSeguro;
