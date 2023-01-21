import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(157.47deg, #00A3FF 0%, #006AA6 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Description = styled.section`
  width: 90%;
  margin: 8rem auto 0rem;
  max-width: 500px;
  text-align: center;

  h1 {
    color: #FFF;
    font-size: 1.85rem;
  }

  p {
    color: #F5F5F5;
    font-size: 1.15rem;
    line-height: 1.85rem;
    margin-top: 0.75rem;
    width: 100%;
  }

  svg {
    margin-top: 1.5rem;
  }
`;

export const Form = styled.form`
  margin: 10rem auto 0;
  max-width: 279px;
  width: 80%;

  button {
    width: 100%;
    background-color: #FFF;
    color: #333333;
    font-weight: bold;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;
