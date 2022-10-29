/*import React, { useCallback, useEffect, useState } from 'react'
import { GlobalMsgRoute } from '../../utils/APIRoutes'
import loading from "../../assets/Loading.gif"
import slowLoading from "../../assets/SlowLoading.gif"
import axios from 'axios'
import '../css/loading.css';


export default function Loading({ children }) {
    const [error, setError] = useState('Cargando...')
    const [gif, setGif] = useState(loading)
    const [isLoading, setIsLoading] = useState(true)
    const getGlobalMessages = useCallback(async () => {
        try {
            await axios.get(GlobalMsgRoute)
            setError("Cargando... Listo")
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        } catch (error) {
            setError("Nuestros servicios no están disponibles")
            setGif(slowLoading)
        }
    }, [])

    useEffect(() => {
        getGlobalMessages()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(isLoading){
        return(
            <div className='charger__container'>
                <h1 className='blue'>{error}</h1>
                <img src={gif} alt='loading.gif'></img>
            </div>
        )
    }
    return (
        <div>{children}</div>
    )
}
*/