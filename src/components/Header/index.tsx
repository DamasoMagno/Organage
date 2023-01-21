import { useState } from "react";
import { X, List, SignOut } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";

import { Container, Navigation } from "./styles";

export function Header() {
  const navigte = useNavigate();
  const [mobileScreenIsOpen, setMobileScreenIsOpen] = useState(false);

  function toggleMenuOnMobile() {
    setMobileScreenIsOpen(!mobileScreenIsOpen);
  }

  return (
    <Container>
      <div className="logo">
        <h2>Organage.</h2>
        <button onClick={toggleMenuOnMobile}>
          {
            mobileScreenIsOpen ?
              <X size={24} /> : <List size={24} />
          }
        </button>
      </div>

      <Navigation menuIsVisible={mobileScreenIsOpen}>
        <div className="links">
          <Link to="/calendar">Calendário</Link>
          <Link to="/queue">Ordem Fila</Link>
          <Link to="/schedules">Horário</Link>
        </div>

        <button className="logoutButton" onClick={() => navigte("/")}>
          <SignOut /> Sair
        </button>
      </Navigation>
    </Container>
  );
}