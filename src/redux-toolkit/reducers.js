import { combineReducers } from "@reduxjs/toolkit";
import cotizadorReducer from "./cotizadorSlice";

const rootReducer = combineReducers({
  cotizador: cotizadorReducer,
  // Agrega más reducers si es necesario
});

export default rootReducer;
