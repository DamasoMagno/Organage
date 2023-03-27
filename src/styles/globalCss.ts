import { createGlobalStyle, keyframes } from "styled-components";

const closeModal = keyframes`
  0% {
    bottom: 0;
  }

  100% {
    bottom: -100%
  }
`;

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button, textarea {
    font-family: 'Dosis', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .sc-hKwDye {
    &[data-state='closed'] {
      animation: ${closeModal} 1s ease-in;
    }
  }
`;
