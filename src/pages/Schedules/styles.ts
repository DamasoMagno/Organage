import { Container } from "styles/container";
import styled from "styled-components";

export const Content = styled(Container)`
  main {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ScheduleList = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .25rem;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    padding: 1rem 0;

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


