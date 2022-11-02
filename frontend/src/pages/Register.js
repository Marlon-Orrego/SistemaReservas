import React, { useState } from "react";
import styles from "../styles";
import "../css/register.css";
import axios from "axios";
import md5 from "md5";
export default function Register() {
  // Datos del usuario
  const [user, setUser] = useState({
    Nombre: "",
    Id: "",
    correo: "",
    contraseña: "",
    repassword: "",
  });

  // Mensajes de error
  const [error, setError] = useState("");

  // Actualiza datos de usuario
  const handleChange = ({ target: { name, value } }) => {
    setError("");
    setUser({ ...user, [name]: value });
  };
  // Manejamos el registro
  const handleSubmit = async () => {
    //setUser({ ...user, repassword: '' })
    if (handleValidate()) {
      let url = "http://localhost:3000/clientes";
      user.contraseña=md5(user.contraseña)
      axios.post(url, user).then((response) => {
        console.log(response);
      });

      window.location.href = "/";
    } else {
      console.log("No apto para el registro");
    }
  };

  //METODO QUE VALIDA EL FORMULARIO
  const handleValidate = () => {
    var correoValido =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (user.Nombre.length < 8) {
      setError("Por favor ingrese su Nombre completo");
      return false;
    } else if (user.Id < 8||user.Id>10) {
      setError("Por favor ingrese una C.C valida");
      return false;
    } else if (!user.correo.match(correoValido)) {
      console.log("correo inválido");
      setError("Por favor ingrese un correo válido");
      return false;
    } else if (user.contraseña.length < 8) {
      setError("La contraseña debe tener mínimo 8 caracteres");
      return false;
    } else if (user.contraseña !== user.repassword) {
      setError("Las contraseñas no coinciden");
      return false;
    }
    return true;
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
        <center>
          <h2 className={styles.heading2}>Registro</h2>
        </center>

        <form className="mt-6">
          <div className="mb-2">
            <label htmlFor="correo" className={styles.paragraph}>
              Nombre
            </label>
            <input
              type="text"
              name="Nombre"
              onChange={handleChange}
              placeholder="Nombre Completo"
              className="block w-80 px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="Id" className={styles.paragraph}>
              C.C
            </label>
            <input
              type="text"
              onChange={handleChange}
              placeholder="C.C"
              name="Id"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="correo" className={styles.paragraph}>
              correo
            </label>
            <input
              type="correo"
              name="correo"
              onChange={handleChange}
              placeholder="Correo"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password" className={styles.paragraph}>
              Contraseña
            </label>
            <input
              type="password"
              name="contraseña"
              onChange={handleChange}
              placeholder="Contraseña"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password" className={styles.paragraph}>
              Confirmar Contraseña
            </label>
            <input
              type="password"
              name="repassword"
              onChange={handleChange}
              placeholder="Repetir contraseña"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <br></br>
          <div className={`${styles.flexCenter}`}>
            <button
              onClick={handleSubmit}
              type="button"
              href="/Asientos"
              className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
            >
              Registrarse
            </button>
          </div>
          <br></br>
          <center>
            <div className="error__msg__container">
              <p className="error__msg blue ">{error}</p>
            </div>
          </center>
        </form>

        <p className="mt-8 text-xs font-light text-center text-white">
          {" "}
          Ya tengo una cuenta{" "}
          <a
            href="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Ingresar
          </a>
        </p>
      </div>
    </div>
  );
}
