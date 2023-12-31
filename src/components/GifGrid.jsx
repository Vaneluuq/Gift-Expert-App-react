import GifCard from "./GifCard"
import useFetchGifs from "../hooks/useFetchGifs"
import PropTypes from "prop-types"

const GifGrid = ({ category }) => {

  const { images, loadingImages } = useFetchGifs( category )

  return (
    <>
        <h3>{category}</h3>
        {loadingImages && <h2>...Cargando</h2>}
        <div className="card-grid">
            {images?.map((img) => (       
                <GifCard key={ img.id} { ...img }/>
            ))}
        </div>
     
    </>
  )
}   

export default GifGrid

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
