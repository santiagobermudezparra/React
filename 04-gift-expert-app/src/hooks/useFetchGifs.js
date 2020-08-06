import { useState, useEffect } from "react"
import {getGifs} from '../helpers/getGifs'
export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    //esto es un custom hook
    useEffect( () => {
        getGifs(category)
            .then(imgs =>{
                    setstate({
                        data: imgs,
                        loading: false
                    })
                
            })


    },[category])//para evitar que se autorecargue cuando cambie
    return state;
    
}