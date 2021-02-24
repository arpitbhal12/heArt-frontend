import react from "react";
import classes from './Input.module.css';
// TODO
const Input = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      className={props.className}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;