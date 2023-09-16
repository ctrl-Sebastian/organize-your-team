import "./InputField.css"

const InputField = (props) => {
  const handleTextChange = (e) => {
    props.updateValue(e.target.value)
  }

  const { type = "text"} = props

  return(
    <div className={`field input${type}`}>
      <label>{props.title}</label>
      <input 
      type={type}
      placeholder = {props.placeholder} 
      required={props.required} 
      value={props.value}
      onChange={handleTextChange}
      />
    </div>
  )
}

export default InputField;