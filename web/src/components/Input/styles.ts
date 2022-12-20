import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 0.8rem;
  border-radius: 0.25rem;
  border: 1px solid #f5f5f5;
  transition: 0.25s;

  &:focus-within {
    border: 1px solid rgb(66, 153, 225);
    background: transparent;
    color: rgb(66, 153, 225);
  }

  svg {
    opacity: 0.5;
  }

  input {
    margin-left: 8px;
    background-color: transparent;
    outline: 0;
    border: 0;
    font-size: 1.125rem;
    flex: 1;
    color: rgba(0, 0, 0, 0.5);

    &::placeholder {
      color: #a9a9a9;
    }
  }

  button {
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
