import { Container } from "styles/container";
import styled from "styled-components";

interface ClassPositionProps {
  isOwnClass?: boolean;
}

export const Content = styled(Container)`
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
  gap: .5rem;

  > span {
    font-size: 1.15rem;
    color: ${props => !props.isOwnClass ? "#949494" : "#00A3FF" };
    font-weight: bold;
  }

  p {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .85rem;
    font-size: 1.15rem;
    padding: 0 1rem;
    border-radius: 8px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, .15);
    background-color: ${props => !props.isOwnClass ? "#FFF" : "#00A3FF" };
    color: ${props => !props.isOwnClass ? "#676767" : "#FFF" };
  }
`;



