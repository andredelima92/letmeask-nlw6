interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, children }) => {
  return <button>{children}</button>;
};

export default Button;
