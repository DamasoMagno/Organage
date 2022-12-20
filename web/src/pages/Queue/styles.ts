import { DefaultContainer } from "styles/defaultContainer";
import styled, { css } from "styled-components";

interface ClassPositionProps {
  isOwnClass?: boolean;
}

export const Content = styled(DefaultContainer)`
  main {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ClassPosition = styled.li<ClassPositionProps>`
  list-style: none;
  display: flex;
  align-items: center;

  > span {
    font-size: 1rem;
    color: ${props => !props.isOwnClass ? "#949494" : "#00A3FF" };
    font-weight: bold;
  }

  .class {
    margin-left: 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    justify-content: space-around;
    padding: .5rem 1rem;
    border-radius: 8px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, .15);
    background-color: ${props => !props.isOwnClass ? "#FFF" : "#00A3FF" };
    color: ${props => !props.isOwnClass ? "#676767" : "#FFF" };
  }
`;

