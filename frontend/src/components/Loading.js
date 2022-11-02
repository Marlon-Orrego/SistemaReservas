import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
//import loadingGIF from '../assets/Loading.gif'
import loadingGIF from '../assets/GifPrueba.gif'
import '../css/loading.css'

export default function Loading({ children }) {
    const [error, setError] = useState('Cargando...')
    const gif = loadingGIF
    const [isLoading, setIsLoading] = useState(true)

    const getAsientos = useCallback(async () => {
        try {
            await axios.get("http://localhost:3000/vuelos")
            setError("Cargando ...Listo")
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        } catch (error) {
            setError("Lo sentimos, no podemos acceder en este momento")
        }
    }, [])

    useEffect(() => {
        getAsientos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) {
        return (
            <div className='charger__container'>
                <h1 className='texto'>{error}</h1>
                <img src={gif} alt='loading.gif'></img>
            </div>
        )
    }
    return (
        <div>{children}</div>
    )
}
