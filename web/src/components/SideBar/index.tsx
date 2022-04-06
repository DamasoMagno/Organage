import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import { Container } from "./styles";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export function SideBar() {
  const [mobileScreen, setMobileScrren] = useState(false);

  return (
    <Container>
      <button 
        onClick={() => setMobileScrren(true)}
        className="openMenu"  
      >
        <FiMenu />
      </button>
      <h2>Organage.</h2>
      <nav className={mobileScreen ? "activeMobile" : ""}>
        <button 
          onClick={() => setMobileScrren(false)} 
          className="closeMenu"
        >
          <MdClose />
        </button>
        <Link to={""}>Teste</Link>
        <Link to={""}>Calendário</Link>
        <Link to={""}>Funcionários</Link>
        <Link to={""}>LEI</Link>
      </nav>
    </Container>
  );
}