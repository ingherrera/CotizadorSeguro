import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datos: {
    marca: "",
    year: "",
    plan: "",
  },
  resultado: 0,
  cargando: false,
  error: "",
};

export const cotizadorSlice = createSlice({
  name: "cotizador",
  initialState,
  reducers: {
    setDatos: (state, action) => {
      const { name, value } = action.payload;
      state.datos = {
        ...state.datos,
        [name]: value,
      };
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setCargando: (state, action) => {
      state.cargando = action.payload;
    },
    setResultado: (state, action) => {
      state.resultado = action.payload;
    },
  },
});

export const { setDatos, setError, setCargando, setResultado } = cotizadorSlice.actions;

export default cotizadorSlice.reducer;
