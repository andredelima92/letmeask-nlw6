import { useState } from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((oldValue) => (oldValue += 1));
  };

  return <button onClick={increment}>{counter}</button>;
};

export default Button;
