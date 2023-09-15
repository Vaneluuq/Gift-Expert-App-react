import { useState } from "react"

const Addcategory = ({onNewValue}) => {
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
    <form onSubmit={onsubmitEvent} >
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
