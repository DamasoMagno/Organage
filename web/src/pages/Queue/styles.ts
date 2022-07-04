import styled, { css } from "styled-components";

interface ClassPositionprops {
  isOwnClass?: boolean;
}

export const Container = styled.div``;

export const QueueContent = styled.main`
  width: 90%;
  height: 80vh;
  margin: 2rem auto;
  background-color: ${(ctx) => ctx.theme.colors.gray[900]};
  border-radius: 4px;
  padding: 1rem 1rem 1.5rem;

  main {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ClassPosition = styled.li<ClassPositionprops>`
  list-style: none;
  display: flex;
  align-items: center;

  p {
    font-size: 1rem;
    font-weight: bold;
  }

  strong {
    margin-left: 0.5rem;
    width: 100%;
    text-align: center;
    padding: 0.5rem 0rem;
    border-radius: 4px;
    font-size: 1.1rem;

    ${({ theme, isOwnClass }) => {
      if (isOwnClass) {
        return css`
          background-color: ${theme.colors.blue[900]};
          color: ${theme.colors.white[900]};
        `;
      } else {
        return css`
          background-color: ${theme.colors.white[900]};
          color: ${theme.colors.black[900]};
        `;
      }
    }}
  }
`;
