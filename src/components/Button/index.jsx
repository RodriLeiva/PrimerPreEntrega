const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.greeting}</button>
  )
}

export default Button