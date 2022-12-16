import styled from "styled-components";

export const DefaultContainer = styled.main`
  width: 90%;
  height: 80vh;
  margin: 2rem auto;
  background-color: ${(ctx) => ctx.theme.colors.white[600]};
  border-radius: 4px;
  padding: 1rem 1rem 1.5rem;

  header h2 {
    font-size: 1rem;
  }
`;