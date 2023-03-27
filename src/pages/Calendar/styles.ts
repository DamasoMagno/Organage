import styled from "styled-components";
import { Container } from "styles/container";

export const Content = styled(Container)`
  position: relative;

  main {
    margin-top: 1.5rem;
    display: grid;
    align-items: flex-start;
    gap: .5rem;

    @media(min-width: 1024px){
      grid-template-columns: 350px 1fr;
      gap: 1.5rem;
    }


    .noContent {
      display: flex; 
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: .85rem;
      font-weight: bold;
      opacity: .5;
      height: 100%;

      span {
        width: 150px;
        text-align: center;
        line-height: 1.5;
      }
    }
  }
`;


