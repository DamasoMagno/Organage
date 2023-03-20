import styled, { css } from "styled-components";

interface OptionProps {
  isSelected: boolean;
}

export const OptionsContainer = styled.div`
  display: flex;
  gap: .5rem;
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  overflow-x: scroll;

  > div {
    margin-top: 0;
  }
`;

export const Option = styled.button<OptionProps>`
  background: #FFF;
  border: 0;
  padding: .5rem;
  border-radius: 8px;
  width: 90px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${props =>
    props.isSelected &&
    css`
      border: 1px solid blue;
      color: blue;
    `
  }
`;

