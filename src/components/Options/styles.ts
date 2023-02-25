import styled, { css } from "styled-components";

interface OptionProps {
  isSelected: boolean;
}

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  height: 2rem;
  width: 100%;
  margin-bottom: 1rem;
  overflow-x: scroll;
`;

export const Option = styled.button<OptionProps>`
  background: #FFF;
  border: 0;
  border-radius: 8px;
  width: 90px;
  height: 100%;
  font-size: 1rem;
  
  ${props =>
    props.isSelected &&
    css`
      border: 1px solid blue;
      color: blue;
    `
  }
`;

