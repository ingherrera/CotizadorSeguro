export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "1":
      incremento = 1.3;
      break;
    case "2":
      incremento = 1.15;
      break;
    case "3":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}


export function calcularPlan(plan) {
  return plan === "1" ? 1.2 : 1.5;
}

export function formatearDinero(cantidad) {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function cotizarSeguro({ year, marca, plan }) {
  // Una base de 2000
  let resultado = 2000;

  // Obtener la diferencia de años
  const diferencia = obtenerDiferenciaYear(year);

  // por cada año hay que restar el 3%
  resultado -= (resultado * diferencia * 3) / 100;

  // Europeo 30%
  // Americano 15%
  // Asiatico 5%
  resultado *= calcularMarca(marca);

  // Básico 20%
  // Completo 50%
  resultado *= calcularPlan(plan);

  // Formatear Dinero
  resultado = formatearDinero(resultado);

  return resultado;
}
