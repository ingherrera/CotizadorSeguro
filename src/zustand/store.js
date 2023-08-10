import { create } from "zustand";

export const useStore = create((set) => ({
  datos: {
    marca: "",
    year: "",
    plan: "",
  },
  resultado: 0,
  cargando: false,
  error: "",
  setDatos: (name, value) =>
    set((state) => ({
      datos: {
        ...state.datos,
        [name]: value,
      },
    })),
  setError: (error) => set({ error }),
  setCargando: (valor) => set({ cargando: valor }),
  setResultado: (resultado) => set({ resultado }),
}));
