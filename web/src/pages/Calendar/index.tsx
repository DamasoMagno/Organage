import { MdArrowDropDown } from "react-icons/md";

import { SideBar } from "../../components/SideBar";

import { Container, Events, Event } from "./styles";

export function Calendar() {
  return (
    <Container>
      <SideBar />

      <Events>
        <header>
          <h2>Eventos</h2>
        </header>

        <main>
          <div>
            <Event>
              <strong>Reunião Pais e Mestres</strong>
              <MdArrowDropDown />
            </Event>
            <Event>
              <strong>Reunião Pais e Mestres</strong>
              <MdArrowDropDown />
            </Event>
            <Event>
              <strong>Reunião Pais e Mestres</strong>
              <MdArrowDropDown />
            </Event>
          </div>
        </main>
      </Events>
    </Container>
  );
}