import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface ButtonProps 
extends ButtonHTMLAttributes<HTMLElement> 
{
  label: string;
}

export function Button({ label, ...props }: ButtonProps) {
  return (
    <Container {...props}>
      {label}
    </Container>
  );
}