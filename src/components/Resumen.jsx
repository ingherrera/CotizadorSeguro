import { useCallback, useRef } from "react";
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants";

function Resumen() {
  const { datos, resultado } = useCotizador()
  const { marca, year, plan } = datos
  const yearRef = useRef(year)
  // console.log({yearRef})

  const [nombreMarca] = useCallback(MARCAS.filter( m => m.id == Number(marca)),[resultado])

  // console.log({ nombreMarca })
  
  const [nombrePlan] = useCallback(PLANES.filter((p) => p.id == Number(plan)),
    [resultado]
  );
    
  // console.log({ nombrePlan })

  if (resultado === 0) return null;
  
  return (
    <div className="bg-gray-100 text-center mt-5 p-5">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
      <p className="my-2">
        <span className="font-bold">Marca:</span>
        {nombreMarca.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan:</span>
        {nombrePlan.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Año del Auto:</span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización:</span>
        { resultado }
      </p>
    </div>
  );
}

export default Resumen