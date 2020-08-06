//rafc
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {
// const categories = ['Peaky Blinders', 'Gotham', 'Vikingos'];
    const [categories, setCategories] = useState(['peaky Blinders']);
    
    return (
        <>
            <h2>GifExpert</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
 
            <ol>
                {
                    categories.map(cat => 
                        <GifGrid key={cat}
                        category={cat}/>
                    )
                }
            </ol>
        </>
    )
}
