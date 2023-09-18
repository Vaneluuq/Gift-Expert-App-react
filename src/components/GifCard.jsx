import PropTypes from "prop-types"

const GifCard = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} ></img>
      <p>{title}</p>
    </div>
  )
}

export default GifCard

GifCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
