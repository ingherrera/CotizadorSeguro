import { createContext, useState } from "react"
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext()

export const CotizadorProvider = ({children}) => { // eslint-disable-line react/prop-types
  
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [resultado, setResultado] = useState(0)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState("")


  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = () => {
    // console.log("Cotizando seguro");

    // Una base de 2000
    let resultado = 2000;

    // Obtener la diferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year);
    console.log(diferencia);

    // por cada año hay que restar el 3%
    //    x -= y         resultado -=(resultado*diferencia*3/100)
    //    x = x - y      resultado = resultado - (resultado*diferencia*3/100)
    //    resultado = resultado - (resultado*diferencia*3/100)*/
    resultado -= (resultado * diferencia * 3) / 100;
    console.log("2000 - año diferencia", resultado);

    // Europeo 30%
    // Americano 15%
    // Asiatico 5%
    resultado *= calcularMarca(datos.marca);
    console.log("Incremento ", calcularMarca(datos.marca));

    // Básico 20%
    // Completo 50%
    resultado *= calcularPlan(datos.plan);

    // Formatear Dinero
    resultado = formatearDinero(resultado);

    setCargando(true);

    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 3000);
  }
  
  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChange,
        resultado,
        cargando,
        cotizarSeguro,
        error,
        setError
      }}>
      {children}
    </CotizadorContext.Provider>
  );
}

export default CotizadorContext