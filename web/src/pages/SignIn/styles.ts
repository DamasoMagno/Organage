import styled from "styled-components";

export const Container = styled.div`
  background-color: #00A3FF;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Description = styled.section`
  width: 90%;
  margin: 2rem auto 1rem;
  max-width: 500px;

  h1 {
    color: #FFF;
    font-size: 1.85rem;
  }

  p {
    color: #F5F5F5;
    font-size: 1.15rem;
    line-height: 1.5rem;
    margin-top: 0.85rem;
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100vw;
  margin: 0 auto;
  height: 70%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: #FFF;

  h2 {
    color: #00A3FF;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  div.inputs {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;

    > button {
      margin-top: 1rem;
    }
  }
`;
