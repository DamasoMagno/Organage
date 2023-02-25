import styled from "styled-components";
import { Container } from "styles/container";

export const Content = styled(Container)`
  position: relative;

  main {
    display: flex;
    flex-direction: column;
  }
`;

export const Categories = styled.div`
  label {
    color: rgba(51, 51, 51, 0.5);
    margin-bottom: .45rem;
    font-weight: 500;
  }
`;

