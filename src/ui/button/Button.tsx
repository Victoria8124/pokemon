import './Button.scss'
const Button = ({ text, type }: { text: string; type: "submit" | "button" | "reset" }) => {
  return (
    <button className="button" type={type}>
      {text}
    </button>
  );
};
 
export default Button;