import React, { useState } from 'react'
import styles from "../styles";
import "../css/register.css"

export default function Register() {

    // Datos del usuario
    const [user, setUser] = useState({
        nombre: '',
        cedula: '',
        email: '',
        password: '',
        repassword: '',
    })

    // Mensajes de error
    const [error, setError] = useState('')

    // Actualiza datos de usuario
    const handleChange = ({ target: { name, value } }) => {
        setError('')
        setUser({ ...user, [name]: value })
    }
    // Manejamos el registro
    const handleSubmit = async () => {
        //setUser({ ...user, repassword: '' })
        if (handleValidate()) {
            console.log('Apto para registro')
        } else {
            console.log('No apto para el registro')
        }
    }
    //METODO QUE VALIDA EL FORMULARIO
    const handleValidate = () => {
        var emailValido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (user.nombre.length < 8){
            setError('Por favor ingrese su nombre completo')
            return false
        } else if (user.cedula < 8 ) {
            setError('Por favor ingrese una cedula valida')
            return false
        } else if (!user.email.match(emailValido)) {
            console.log('Email inválido')
            setError('Por favor ingrese un email válido')
            return false
        } else if (user.password.length < 8) {
            setError('La contraseña debe tener mínimo 8 caracteres')
            return false
        } else if (user.password !== user.repassword) {
            setError('Las contraseñas no coinciden')
            return false
        }
        return true
    }

    return (

        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
                <h2 className={styles.heading2}>
                    Registro
                </h2>

                <form className="mt-6">

                    <div className='mb-2'>
                        <label
                            htmlFor="email"
                            className={styles.paragraph}
                        >
                            Nombre
                        </label>
                        <input
                            type='text'
                            name='nombre'
                            onChange={handleChange}
                            placeholder='Nombre Completo'
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="mb-2">
                        <label
                            htmlFor="cedula"
                            className={styles.paragraph}
                        >
                            C.C
                        </label>
                        <input
                            type="text"
                            placeholder='Cedula'
                            name='cedula'
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className='mb-2'>
                        <label
                            htmlFor="email"
                            className={styles.paragraph}
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            name='email'
                            onChange={handleChange}
                            placeholder='Correo'
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className='mb-2'>
                        <label
                            htmlFor="password"
                            className={styles.paragraph}
                        >
                            Contraseña
                        </label>
                        <input
                            type='password'
                            name='password'
                            onChange={handleChange}
                            placeholder='Contraseña'
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className='mb-2'>
                        <label
                            htmlFor="password"
                            className={styles.paragraph}
                        >
                            Confirmar Contraseña
                        </label>
                        <input
                            type='password'
                            name='repassword'
                            onChange={handleChange}
                            placeholder='Repetir contraseña'
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <br></br>
                    <div className={`${styles.flexCenter}`}>
                        <button onClick={handleSubmit} type="button" href='/Asientos' className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>Registrarse</button>
                    </div>
                    <br></br>
                    <div className='error__msg__container'>
                        <p className='error__msg blue '>{error}</p>

                    </div>
                </form >

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

    )

}  