import styled from "styled-components";

export const Container = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${(ctx) => ctx.theme.colors.blue[900]};
      font-size: 0.8rem;
    }
  }
`;
