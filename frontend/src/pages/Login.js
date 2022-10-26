import React from 'react'
import { useState } from 'react'
import styles from "../styles";
import ButtonL from "../components/ButtonLogin";


export default function Login() {
    // CONSTANTE PARA LOS DATOS DEL USUARIO //
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    // CONSTANTE PARA LOS MENSAJES DE ERROR //
    const [error, setError] = useState('')
    // MÉTODO QUE ACTUALIZA LOS DATOS DEL USUARIO //
    const handleChange = ({ target: { name, value } }) => {
        setError("")
        setUser({ ...user, [name]: value })
    }

    const handleSummit = () => {
        if (handleValidate()) {
            console.log('Ingreso exitoso')
        }
    }

    // MÉTODO QUE VALIDA LOS DATOS DEL FORMULARIO//
    const handleValidate = () => {
        var emailValido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!user.email.match(emailValido)) {
            console.log('Email inválido')
            setError('Por favor ingrese un email válido')
            return false
        } else if (user.password.length < 6) {
            setError('La contraseña debe tener mínimo 6 caracteres')
            return false
        }
        return true
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
                <h2 className={styles.heading2}>
                    Iniciar Sesión
                </h2>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className={styles.paragraph}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className={styles.paragraph}
                        >
                            Contraseña
                        </label>
                        <input
                            type="password"
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <br></br>
                    <div className={`${styles.flexCenter}`}>
                        <ButtonL onClick={handleSummit} ></ButtonL>
                    </div>
                    <div className='error__msg__container'>
                    <p className='error__msg'>{error}</p>
                </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-white">
                    {" "}
                    No tienes una cuenta?{" "}
                    <a
                        href="/register"
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Registrate
                    </a>
                </p>
            </div></div>

    )
}