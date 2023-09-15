import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifts"

function useFetchGifs(category) {

    const [images, setImages] = useState([])
    const [loadingImages, setLoadingImages] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setLoadingImages(false)
    }

    useEffect(() => {
        getImages()
    }, [])


    return {
        images,
        loadingImages
    }

  
  
}

export default useFetchGifs
