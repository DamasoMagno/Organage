import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(ctx) => ctx.theme.colors.white};
  padding: 0.75rem 0.5rem;
  border-radius: 4px;
  width: 100%;
  border: 0;
  transition: filter 0.25s;

  strong {
    font-size: 1rem;
    color: ${(ctx) => ctx.theme.colors.secondText};
  }

  & + button {
    margin-top: 0.5rem;
  }

  &:hover {
    filter: brightness(0.99);
  }
`;
