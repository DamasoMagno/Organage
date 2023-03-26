import styled, { css } from "styled-components";

interface OptionProps {
  isSelected: boolean;
}

export const OptionsContainer = styled.div`
  display: flex;
  gap: .5rem;
  width: 100%;
  margin-bottom: 1rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Option = styled.button<OptionProps>`
  background: #FFF;
  border: 0;
  padding: .25rem 1rem;
  border-radius: 12px;
  font-size: 1rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;


  ${props =>
    props.isSelected &&
    css`
      border: 2px solid blue;
      color: blue;
    `
  }
`;

