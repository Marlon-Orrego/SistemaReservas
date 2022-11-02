import React from "react";
import ProtectedRoute from "./ProtectedRoute";
import styles from "../styles";
const Button = (props) => (
  localStorage.setItem(`Id_Vuelo`,props.data),
  <button
    onClick={ProtectedRoute}
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Reservar Asientos
  </button>
);

export default Button;
