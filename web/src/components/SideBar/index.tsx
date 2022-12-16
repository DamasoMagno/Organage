import { useState } from "react";
import { X, List } from "phosphor-react";
import { Link } from "react-router-dom";

import { Container, Navigation } from "./styles";

export function SideBar() {
  const [mobileScreenIsOpen, setMobileScreenIsOpen] = useState(false);

  function openMenuInMobile() {
    setMobileScreenIsOpen(true);
  }

  function closeMenuInMobile() {
    setMobileScreenIsOpen(false);
  }

  return (
    <Container>
      <div className="title">
        <h2>Organage.</h2>
        <button onClick={openMenuInMobile} className="openMenu">
          <List size={24} />
        </button>
      </div>

      <Navigation isActive={mobileScreenIsOpen}>
        <button onClick={closeMenuInMobile} className="closeMenu">
          <X size={24} />
        </button>

        <div>
          <Link to="/calendar">Calendário</Link>
          <Link to="/queue">Ordem Fila</Link>
          <Link to="/schedules">Horário</Link>
        </div>

        <button>Sair</button>
      </Navigation>
    </Container>
  );
}