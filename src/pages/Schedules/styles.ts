import { Container } from "styles/container";
import styled from "styled-components";

export const Content = styled(Container)`
  main {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

export const ScheduleList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;

  li {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .25rem;
    height: 3rem;

    &:last-child {
      border: 0;
    }
    
    strong {
      font-size: 1.25rem;
    }

    span {
      color: rgba(0, 0, 0, .8);
    }
  }
`;


