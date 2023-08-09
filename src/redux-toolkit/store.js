import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Asegúrate de tener tus reducers

const store = configureStore({
  reducer: rootReducer,
  // Puedes añadir configuraciones adicionales aquí si es necesario
});

export default store;
