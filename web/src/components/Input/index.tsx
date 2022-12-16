import {
  InputHTMLAttributes,
  ReactNode,
  useState,
  LegacyRef
} from "react";
import { EyeClosed, Eye } from "phosphor-react";

import { Container } from "./styles";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: LegacyRef<HTMLInputElement>;
  isPassword?: boolean;
  children?: ReactNode;
}

export function Input({
  children,
  isPassword,
  inputRef,
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
        type={isPassword && !passwordIsVisible ? "password" : "text"}
        {...props}
        ref={inputRef}
      />
      {isPassword &&
        <button type="button" onClick={togglePasswordToText}>
          {passwordIsVisible ? <EyeClosed /> : <Eye />}
        </button>
      }
    </Container>
  );
}