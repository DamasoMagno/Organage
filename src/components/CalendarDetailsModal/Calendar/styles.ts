import styled from "styled-components";

export const EventContent = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: #000;
      font-size: 1.15rem;
    }

    time {
      font-size: .9rem;
      color: #ABABAB;
      margin: 1rem 0;
      display: block;
      text-align: right;
      font-weight: bold;
    }
  }

  span {
    color: #5B5B5B;
    font-size: 1rem;
    display: block;
    margin-top: 1rem;
    font-weight: bold;
  }

  p {
    color: rgba(0, 0, 0, .85);
    line-height: 1.5;
    margin-top: .25rem;
  }
`;