import { InputHTMLAttributes, ComponentType, useState, LegacyRef } from "react";
import { IconBaseProps } from "react-icons";
import { FiEyeOff, FiEye } from "react-icons/fi";

import { Container } from "./styles";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ComponentType<IconBaseProps>;
  inputRef?: LegacyRef<HTMLInputElement>
  isPassword?: boolean;
}

export function Input({
  icon: Icon,
  isPassword,
  inputRef,
  ...props
}: InputProps
) {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  return (
    <Container>
      {Icon && <Icon size={18} />}
      <input
        type={isPassword && !passwordIsVisible ? "password" : "text"}
        {...props}
        ref={inputRef}
      />
      {isPassword &&
        <button
          type="button"
          onClick={() => setPasswordIsVisible(!passwordIsVisible)}
        >
          {passwordIsVisible ? <FiEyeOff /> : <FiEye />}
        </button>
      }
    </Container>
  );
}