import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles";
export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <p className={`${styles.heading3} max-w-[470px] mt-5`}>
        La ruta seleccionada no fue encontrada y será redireccionado a la página
        principal
      </p>
      <br></br>
      <center>
        <button
          className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
          onClick={() => navigate("/")}
        >
          Aceptar
        </button>
      </center>
    </div>
  );
}
