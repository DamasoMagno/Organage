import { createGlobalStyle } from "styled-components";

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
  }

  [disabled] {
    opacity: .5;
    cursor: not-allowed;
  }
`;
