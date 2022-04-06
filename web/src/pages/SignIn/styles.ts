import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.section`
  width: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: none;
  }

  h1 {
    font-weight: bold;
  }

  p {
    max-width: 300px;
    margin-top: 0.85rem;
    text-align: center;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    line-height: 30px;
    font-size: 1.25rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  max-width: 500px;
  width: 90%;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.white};

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }

  div.inputs {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    width: 75%;
  }

  a {
    text-align: right;
  }
`;

export const SelectAccount = styled.div`
  margin: 2rem 0 0.85rem;
  padding: 0 0.4rem;
  width: 75%;

  button {
    background: transparent;
    border: 0;
    position: relative;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.125rem;
    transition: 0.25s;

    &::after {
      width: 2px;
      position: absolute;
      height: 0%;
      top: 50%;
      left: -7%;
      transform: translateY(-50%);
      transition: 0.4s;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 1rem;
      content: "";
      margin-right: 0.25rem;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.black};

      ::after {
        height: 80%;
      }
    }

    & + button {
      margin-left: 1rem;
    }
  }
`;
