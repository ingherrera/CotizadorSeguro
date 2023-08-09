// import useCotizador from "../hooks/useCotizador"

import { useSelector } from "react-redux";

function Error() {
  // const { error } = useCotizador()
  const { error } = useSelector((state) => state.cotizador);

  return (
    <div className="border text-center border-red-400 bg-red-100 text-red-700 py-3">
      <p>{error}</p>
    </div>
  );
}

export default Error;
