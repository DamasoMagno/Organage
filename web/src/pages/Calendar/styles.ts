import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media(max-width: 768px){
    flex-direction: column;
  }
`;

export const Events = styled.main`
  background-color: #fafafa;
  padding: 1rem 0.85rem;
  margin: 1rem auto;
  border-radius: 0.5rem; 
  max-width: 800px;
  width: 90%;
  display: flex;
  flex-direction: column;

  header {
    h2 {
      color: #333333;
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }
  }
`;

export const Event = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }

  strong {
    font-size: 1.25rem;
    color: #8c8c8c;
  }

  svg {
    color: rgba(0, 0, 0, 0.25);
    font-size: 2rem;
  }
`;
