import styled from "styled-components";

export const Container = styled.aside`
  width: 15.6rem;
  padding: 0.25rem 0 0 1rem;

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
    color: #949494;
  }

  nav {
    margin-top: 2rem;

    &.activeMobile {
      height: 100%;
      margin-top: 0;
      display: flex;
      position: absolute;
      top: 0;
      width: 100%;
      left: 0;
      z-index: 0;
      background: blue;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 0;
    }

    .closeMenu {
      align-self: flex-end;
      margin-right: 1rem;
      border: 0;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 64px;
        height: 64px;
        color: #fff;
      }
    }

    a {
      font-weight: 700;
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
  }

  .openMenu {
    border: 0;
    background: transparent;
    display: none;

    svg {
      width: 32px;
      height: 32px;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 768px) {
    .openMenu {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    h2,
    nav {
      display: none;
    }
  }
`;
