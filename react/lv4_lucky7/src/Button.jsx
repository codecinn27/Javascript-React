import "./Button.css";

function Button({ clickFunc, label = "Click Me", style }) {
  return (
    <button onClick={clickFunc} className="Button" style={style}>
      {label}
    </button>
  );
}
export default Button;
