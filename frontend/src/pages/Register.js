import React, { useState } from 'react'
import styles from "../styles";
import ButtonSignUp from "../components/ButtonSignUp";

export default function Register() {
  const [user, setUser] = useState ({
    email:'',
    password:'',
    repassword:'',
  })
  const [error, setError] = useState('')
  const handleChange = ({ target: { name, value } }) => {
    setUser ({ ...user, [name]: value})
  }
  const handleSubmit = () => {
    console.log ('listo')
    if(handleValidate()) {
      console.log('Apto para registro')
    }else{
      console.log('No apto para el registro')
    }
  }
  //METODO QUE VALIDA EL FORMULARIO
  const handleValidate = () => {
    var emailValido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!user.email.match(emailValido)){
      console.log('Email inválido')
      setError('Por favor ingrese un email válido')
      return false
    }else if(user.password.length < 6){
      setError('La contraseña debe tener mínimo 6 caracteres')
      return false
    }else if(user.password !== user.repassword){
      setError('Las contraseñas no coinciden')
      return false
    }
    return true
  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
                <h2 className={styles.heading2}>
                    Registrate
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
                            className="block w-full px-8 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="name"
                            className={styles.paragraph}
                        >
                            Nombre Completo
                        </label>
                        <input
                            type="name"
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="name"
                            className={styles.paragraph}
                        >
                            C.C
                        </label>
                        <input
                            type="name"
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
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className={styles.paragraph}
                        >
                            Confirmar Contraseña
                        </label>
                        <input
                            type="password"
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <br></br>
                    <div className={`${styles.flexCenter}`}>
                        <ButtonSignUp onClick={handleSubmit} ></ButtonSignUp>
                    </div>
                    <div className='error__msg__container'>
                    <p className='error__msg'>{error}</p>
                </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-white">
                    {" "}
                    No tienes una cuenta?{" "}
                    <a
                        href="/login"
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Registrate
                    </a>
                </p>
            </div></div>
  )
}