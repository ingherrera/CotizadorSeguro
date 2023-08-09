import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants"

// import useCotizador from "../hooks/useCotizador";
import Error from "./Error";
import { useDispatch, useSelector } from "react-redux";
import { setDatos, setError, setResultado, setCargando } from "../redux-toolkit/cotizadorSlice";
import { cotizarSeguro } from "../helpers";

function Formulario() {
  // const { datos, handleChange, cotizarSeguro, error, setError } = useCotizador()
  // const { cotizarSeguro, error, setError } = useCotizador();
  // console.log({datos})

  const {datos, error} = useSelector((state) => state.cotizador);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setDatos({ name, value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(datos).includes("")) {
      dispatch(setError("Todos los campos son obligatorios"));
      return
    }

    dispatch(setError(""));
    
    const resultado = cotizarSeguro(datos)
    
    dispatch(setCargando(true));
    
    setTimeout(() => {
      dispatch(setResultado(resultado));
      dispatch(setCargando(false));
    }, 3000);
    
  }

  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        {/* Mostrar Marcas*/}
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
          <select name="marca" className="w-full p-3 bg-white border border-gray-200" value={datos.marca} onChange={(e) => handleChange(e)}>
            <option value="">-- Selecciona Marca --</option>
            {MARCAS.map((marca) => (
              // <option key={marca.id} value={marca.nombre}>
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Mostrar 20 años hacia atras*/}
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
          <select name="year" className="w-full p-3 bg-white border border-gray-200" onChange={(e) => handleChange(e)} value={datos.year}>
            <option value="">-- Selecciona Año --</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Mostrar Plan: Basico ó Completo*/}
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">Elige un plan</label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input type="radio" name="plan" value={plan.id} onChange={(e) => handleChange(e)} />
              </Fragment>
            ))}
          </div>
        </div>

        {/* Cotizar*/}
        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="cotizar"
        />
      </form>
    </>
  );
}

export default Formulario