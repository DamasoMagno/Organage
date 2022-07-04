import { Themes } from "@styles/Themes";
import styled, { css, DefaultTheme, ThemeProps } from "styled-components";

interface NavigationProps {
  isActive: boolean;
}

export const Container = styled.aside`
  padding: 1rem 0 0;
  width: 90%;
  margin: 0 auto;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: bold;
      font-size: 1.5rem;
      color: #949494;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background: transparent;
  }
`;

export const Navigation = styled.nav<NavigationProps>`
  margin-top: 2rem;
  display: none;

  @media (max-width: 768px) {
    ${(props) => {
      if (props.isActive) {
        return css`
          margin-top: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: fixed;
          top: 0;
          background-color: ${(ctx) => ctx.theme.colors.white[900]};
          width: 100%;
          left: 0;
          height: 100vh;

          .closeMenu {
            margin: 1rem 1.5rem;
            align-self: flex-end;
          }

          div {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            height: 100vh;
          }
        `;
      }
    }}
  }

  a {
    font-weight: 700;
    text-align: center;
    width: 100%;
    display: block;
    font-size: 1.25rem;
    color: #b2b2b2;
    transition: all 0.2s;
    position: relative;

    & + a {
      margin-top: 1rem;
    }

    &::after {
      position: absolute;
      content: "";
      width: 5px;
      background: rgb(66, 153, 225);
      bottom: 50%;
      left: -5%;
      transform: translateY(50%);
      height: 0px;
      transition: all 0.15s;
      border-radius: 0 1rem 1rem 0;
    }

    &:hover {
      color: rgb(66, 153, 225);

      &::after {
        height: 125%;
      }
    }
  }
`;
