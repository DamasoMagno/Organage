import styled from "styled-components";
import { DefaultContainer } from "styles/defaultContainer";

export const Content = styled(DefaultContainer)`
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .categoryEvents {
      margin-top: 1rem;

      h3 {
        color: rgba(51, 51, 51, 0.5);
        margin-bottom: .45rem;
      }

      div {
        margin-top: 0.25rem;
        height: 2rem;
        background-color: ${(ctx) => ctx.theme.colors.white[900]};
        display: flex;
        align-items: center;
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        border: 1px solid transparent;

        &:focus-within {
          border-color: ${(ctx) => ctx.theme.colors.blue[900]};
        }

        select {
          width: 100%;
          appearance: none;
          background-color: transparent;
          font-size: 0.875rem;
          height: 100%;
          border: 0;
          outline: 0;
          font-weight: 600;
        }

        svg {
          width: 1.125rem;
          height: 1.12rem;
          color: ${(ctx) => ctx.theme.colors.white[900]};
        }
      }
    }
  }
`;
