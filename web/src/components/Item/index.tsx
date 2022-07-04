import { ButtonHTMLAttributes, FC } from "react";
import { MdArrowForwardIos } from "react-icons/md";

import { Container } from "./styles";

interface ItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Item: FC<ItemProps> =
  ({ label, ...props }) => (
    <Container {...props}>
      <strong>{label}</strong>
      <MdArrowForwardIos size={8} />
    </Container>
  );
