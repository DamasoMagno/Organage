import styled from "styled-components";

interface NavigationProps {
  menuIsVisible: boolean;
}

export const Container = styled.aside`
  padding: 1rem 1.25rem;
  border-bottom: 0.5px solid rgba(51, 51, 51, 0.15);

  
  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: bold;
      font-size: 1.5rem;
      color: #949494;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0;
      background: transparent;
      color: #949494;
    }
  }
`;

export const Navigation = styled.nav<NavigationProps>`
  display: ${props => props.menuIsVisible ? "flex": "none"};
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  background-color: #FFF;
  width: 100%;
  left: 0;
  height: 100%;


  .links {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    a {
      text-align: center;
      width: 100%;
      transition: all 0.2s;
      position: relative;

      &:hover {
        color: rgb(66, 153, 225);
      }
    }
  }


  a, .logoutButton {
    font-size: 1.25rem;
    color: #b2b2b2;
    font-weight: 600;
  }


  .logoutButton {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border: 0;
    background: transparent;
  }
`;
