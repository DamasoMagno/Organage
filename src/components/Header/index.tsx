import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, List, SignOut } from "phosphor-react";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";

import { auth } from "services/firebase";

import { Container, Navigation } from "./styles";

export function Header() {
  const navigte = useNavigate();
  const [mobileScreenIsOpen, setMobileScreenIsOpen] = useState(false);

  function toggleMenuOnMobile() {
    setMobileScreenIsOpen(!mobileScreenIsOpen);
  }

  async function signOutUser() {
    try {
      await signOut(auth);
      localStorage.removeItem("@school");

      navigte("/");
    } catch (error) {
      toast.error("Não foi possível sair da sua conta")
    }
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

        <button className="logoutButton" onClick={signOutUser}>
          <SignOut /> Sair
        </button>
      </Navigation>
    </Container>
  );
}