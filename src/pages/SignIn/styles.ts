import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(157.47deg, #00A3FF 0%, #006AA6 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.section`
  width: 90%;
  margin: 8rem auto 0rem;
  max-width: 300px;
  text-align: center;

  h1 {
    color: #FFF;
    font-size: 2rem;
  }

  p {
    color: #F5F5F5;
    font-size: 1.25rem;
    line-height: 1.85rem;
    margin: 1rem 0 2rem;
    max-width: 350px;
  }
`;

export const Form = styled.form`
  margin: 10rem auto 0;
  max-width: 279px;
  width: 80%;

  button {
    background-color: #FFF;
    color: #333333;
    font-weight: bold;
    width: 100%;
    height: 2.75rem;
    border-radius: 5px;
    border: 0;
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;
