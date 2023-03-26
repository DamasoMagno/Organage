import styled from "styled-components";
import { Container } from "styles/container";

export const Content = styled(Container)`
  position: relative;

  main {
    margin-top: 1.5rem;
    display: grid;
    gap: .5rem;

    @media(min-width: 1024px){
      grid-template-columns: 350px 1fr;
      gap: 1.5rem;
    }
  }
`;


