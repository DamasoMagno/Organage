import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import { Container, Navigation } from "./styles";

export function SideBar() {
  const [mobileScreenIsOpen, setMobileScreenIsOpen] = useState(false);

  return (
    <Container>
      <div className="title">
        <h2>Organage.</h2>
        <button
          onClick={() => setMobileScreenIsOpen(true)}
          className="openMenu"
        >
          <FiMenu size={24} />
        </button>
      </div>

      <Navigation isActive={mobileScreenIsOpen}>
        <button
          onClick={() => setMobileScreenIsOpen(false)}
          className="closeMenu"
        >
          <MdClose size={24} />
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