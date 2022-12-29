import {
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react";
import { EyeClosed, Eye } from "phosphor-react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isPassword?: boolean;
  children?: ReactNode;
}

export function Input({
  children,
  isPassword,
  ...props
}: InputProps
) {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  function togglePasswordToText() {
    setPasswordIsVisible(!passwordIsVisible);
  }

  return (
    <Container>
      {children}
      <input
        type={
          isPassword && passwordIsVisible ?
            "text" :
            "password"
        }
        {...props}
      />
      {isPassword &&
        <button type="button" onClick={togglePasswordToText}>
          {
            passwordIsVisible ?
              <EyeClosed /> :
              <Eye />
          }
        </button>
      }
    </Container>
  );
}