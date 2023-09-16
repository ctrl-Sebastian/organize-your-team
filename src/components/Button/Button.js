import "./Button.css"

const Button = (props) => {
  return <button className="button" type="submit">{props.text}</button>
}

export default Button;