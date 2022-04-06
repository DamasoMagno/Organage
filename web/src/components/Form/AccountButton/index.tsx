import { Container } from "./styles";

type AccountButtonProps = {
  url: string;
  label: string;
}

export function AccountButton({ url, label }: AccountButtonProps) {
  return (
    <Container href={`${url}`}>
      {label}
    </Container>
  );
}