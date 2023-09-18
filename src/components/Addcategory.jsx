import { useState } from "react"
import PropTypes from "prop-types"


const Addcategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("")

  const onInputchange = (e) => {
    setInputValue(e.target.value)
  }

  const onsubmitEvent = (e) => {
    e.preventDefault()
    if(inputValue.trim().length <= 1) return;
    onNewValue(inputValue)
    setInputValue("")
  }

  return (
    <form onSubmit={onsubmitEvent} aria-label="form" >
        <input
        type="text"
        placeholder="buscar gifs"
        onChange={onInputchange}
        value={inputValue}
        />
    </form>
  
  )
}

export default Addcategory
Addcategory.propTypes = {
  onNewValue: PropTypes.func.isRequired
}