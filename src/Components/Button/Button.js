import "./Button.scss";

const Button = ({ children, inverted, ...otherprops }) => {
  return (
    <button className={`${inverted ? "inverted" : ""}`} {...otherprops}>
      {children}
    </button>
  );
};

export default Button;
