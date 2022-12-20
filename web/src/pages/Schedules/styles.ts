import { DefaultContainer } from "styles/defaultContainer";
import styled from "styled-components";

export const Content = styled(DefaultContainer)`
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .selectTypeEvent {
      margin-top: 1rem;
      height: 2rem;
      background-color: #FFF;
      display: flex;
      align-items: center;
      border-radius: 4px;
      padding: 0.25rem 0.5rem;
      border: 1px solid transparent;

      &:focus-within {
        border-color: #00A3FF;
      }

      select {
        width: 100%;
        appearance: none;
        background-color: transparent;
        font-size: 1rem;
        height: 100%;
        border: 0;
        outline: 0;
      }
    }

    div {
      margin-top: 1.5rem;
    }
  }
`;
