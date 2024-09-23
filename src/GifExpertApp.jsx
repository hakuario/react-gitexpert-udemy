import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    // hook
    const [categories, setCategories] = useState(['Bleach']);

    const onAddCategory = (newCategory) => {

        // console.log(newCategory);
        if (categories.includes(newCategory)) return;

        setCategories([
            newCategory, ...categories,
        ])
    }

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={setCategories} 
                onNewCategory={onAddCategory}
            />

            {/* <button onClick={onAddCategory} >Agregar</button> */}
            {categories.map(c =>
            (
                <GifGrid key={c} category={c} />
                /* <div key={c}>
                    <h3 >{c}</h3>
                    <li >{c}</li>
                </div> */
            )
            )}

        </>
    )
}


