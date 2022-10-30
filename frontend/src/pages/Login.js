import React from "react";
import { useState } from "react";
import styles from "../styles";
import "../css/login.css";
import axios from "axios";

export default function Login() {
  // Datos de usuario
  const [user, setUser] = useState({
    correo: "",
    password: "",
  });
  // Mensajes de erros
  const [error, setError] = useState("");

  // Actualiza datos de usuario
  const handleChange = ({ target: { name, value } }) => {
    setError(" ");
    setUser({ ...user, [name]: value });
  };

  // Maneja el registro
  const handleSubmit = () => {
    if (handleValidate()) {
      let url = "http://localhost:3000/clientes";
      axios.get(url, user).then((response) => {
        console.log(response);
      });
    }
  };

  // Valida el formulario
  const handleValidate = () => {
    var emailValido =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!user.correo.match(emailValido)) {
      console.log("Email inválido");
      setError("Por favor ingrese un correo válido");
      return false;
    } else if (user.password.length < 8) {
      console.log("contraseña inválida");
      setError("Ingrese contraseña de mínimo 8 caracteres");
      return false;
    }
    return true;
  };

  return (
    // Login container
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
        <h2 className={styles.heading2}>Iniciar Sesión</h2>
        <form className="mt-6">
          <div className="mb-2">
            <label htmlFor="correo" className={styles.paragraph}>
              Email
            </label>
            <input
              type="text"
              name="correo"
              onChange={handleChange}
              placeholder="Correo"
              className="block w-80 px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <br></br>

          <div className="mb-2">
            <label htmlFor="password" className={styles.paragraph}>
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Contraseña"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <br></br>

          <div className={`${styles.flexCenter}`}>
            <button
              onClick={handleSubmit}
              type="button"
              className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
            >
              Ingresar
            </button>
          </div>

          <br></br>
          <center>
            <div className="error__msg__container">
              <p className="error__msg white">{error}</p>
            </div>
          </center>
        </form>

        <p className="mt-8 text-xs font-light text-center text-white">
          {" "}
          ¿No tienes una cuenta?{" "}
          <a
            href="/register"
            className="font-medium text-blue-600 hover:underline"
          >
            Registrate
          </a>
        </p>
      </div>
    </div>
  );
}
