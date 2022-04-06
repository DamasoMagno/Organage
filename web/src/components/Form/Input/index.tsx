import { InputHTMLAttributes, ComponentType, useState } from "react";
import { IconBaseProps } from "react-icons";
import { FiEyeOff, FiEye } from "react-icons/fi";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  icon?: ComponentType<IconBaseProps>;
  isPassword?: boolean; 
}

export function Input({ icon: Icon, isPassword, ...props }: InputProps) {
  const [ passwordIsVisible, setPasswordIsVisible ] = useState(false);

  console.log(passwordIsVisible);

  return (
    <Container>
      {Icon && <Icon size={18}/>}
      <input {...props} type={ isPassword && !passwordIsVisible ? "password" : "text" } />
      { isPassword && 
        <button type="button" onClick={() => setPasswordIsVisible(!passwordIsVisible)}>
          { passwordIsVisible ? <FiEyeOff/> : <FiEye /> }
        </button> 
      }
    </Container>
  );
}