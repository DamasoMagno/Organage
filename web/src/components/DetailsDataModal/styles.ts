import styled from "styled-components";
import * as Modal from "@radix-ui/react-dialog";

export const Overlay = styled(Modal.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .25);
`;

export const ModalContainer = styled(Modal.Content)`
  background: ${props => props.theme.colors.white[900]};
  padding: 2rem 1rem 3rem;
  bottom: 0;
  position: fixed;
  border-radius: 16px 16px 0 0;
  width: 100%;

  .bar {
    background-color: #EEEEEE;
    height: 3px;
    border-radius: 4px;
    width: 40%;
    margin: 0 auto;
  }
`;

export const Event = styled.div`
  time {
    font-size: .9rem;
    color: #ABABAB;
    margin: 1rem 0;
    display: block;
    text-align: right;
    font-weight: bold;
  }

  .details {
    strong {
      color: ${props => props.theme.colors.black};
      font-size: 1.15rem;
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
  }
`;

export const Schedule = styled.div`
    strong {
      margin-top: 2rem;
      display: block;
      color: ${props => props.theme.colors.blue[900]};
      font-size: 1.25rem;
    }
    
    ul {
      margin-top: .85rem;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          color: #5B5B5B;
          font-size: .85rem;
          display: block;
          margin-top: .85rem;
          font-weight: bold;
        }
      }
    }
`;
