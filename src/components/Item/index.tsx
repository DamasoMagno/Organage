import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { CaretDown } from "phosphor-react";

import { Container } from "./styles";

interface ItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Item: FC<ItemProps> =
  ({ children, ...props }) => (
    <Container {...props}>
      <strong>{children}</strong>
      <CaretDown size={10} />
    </Container>
  )
