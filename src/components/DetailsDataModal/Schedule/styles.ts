import styled from "styled-components";

export const ScheduleContent = styled.div`
  strong {
    margin-top: 3rem;
    display: block;
    color: #00A3FF;
    font-size: 1.25rem;
  }
    
  ul {
    margin-top: 1.5rem;
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      font-size: 1.125rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: #5B5B5B;
        font-size: .875rem;
        display: block;
        margin-top: .85rem;
        font-weight: bold;
      }
    }
  }
`;
