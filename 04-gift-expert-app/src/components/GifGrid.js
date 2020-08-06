import React from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs();

 //que se ejecute esa funcion cuando se carga el cmp la primera vez
    // const [images, setImages] = useState([]);
    // useEffect(() => { 
    //     getGifs(category)
    //                 .then(imgs => setImages(imgs))
    // }, [category])
    


    return (
        <>
        <h3>{category}</h3>
        {loading ? 'Cargando....': 'Data cargada'}
        {/* <div className="card-grid">
            {
                images.map((img) =>(
                    <GifGridItem 
                    key={img.id}
                    {...img}
                     />
                ))
            }
            

        </div> */}
        </>
        
    )
}
