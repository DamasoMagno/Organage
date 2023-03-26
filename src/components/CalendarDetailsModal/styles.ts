import styled, { keyframes } from "styled-components";
import * as Modal from "@radix-ui/react-dialog";

const openModal = keyframes`
  0% {
    bottom: -100%;
  }

  100% {
    bottom: 0;
  }
`;

export const Overlay = styled(Modal.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .85);
`;

export const Content = styled(Modal.Content)`
  background: #FFFF;
  animation: ${openModal} .5s forwards;
  font-family: "Droid Sans", sans-serif;
  padding: 1rem 1rem 3rem;
  position: fixed;
  border-radius: 16px 16px 0 0;
  max-width: 500px;
  width: 100%;

  .bar {
    background-color: #EEEEEE;
    height: 3px;
    border-radius: 4px;
    width: 96px;
    height: 4px;
    margin: 0 auto;
  }

  > div:last-child {
    max-height: 300px;
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
      display: none;
    }
  } 

  @media(min-width: 728px){
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 16px;

    .bar {
      display: none;
    }
  }
`;


