import { useState } from "react"
import GifGrid from "./components/GifGrid"
import Addcategory from "./components/Addcategory"

function GifExpertApp() {
    const [categories, setCategories] = useState(["One Punch"])

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return

        setCategories(categories => [newCategory, ...categories])
    }


  return (
    <>
    <h1>Gift Expert App</h1>

    <Addcategory
      onNewValue ={onAddCategory}
    />
    {categories?.map(category => (
        <GifGrid key={category} category={category} />
    ))}
    </>
  )
}

export default GifExpertApp
