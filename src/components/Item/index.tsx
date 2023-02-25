import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { CaretDown } from "phosphor-react";

import { Container } from "./styles";
import { Skeleton } from "./SkeletonLoader";

interface ItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading: boolean;
}

export const Item: FC<ItemProps> =
  ({ children, loading, ...props }) => {

    return <Container {...props}>
      {!loading ? (
        <>
          <strong>{children}</strong>
          <CaretDown size={10} />
        </>
      ) : (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </Container>
  }
