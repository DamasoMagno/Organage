import { MdArrowDropDown } from "react-icons/md";

import { SideBar } from "@components/SideBar";
import { Item as Event } from "@components/Item";

import { Container, CalendarContent } from "./styles";

type CalendarProps = {
  onSetCalendarData(): void;
}

export function Calendar({ onSetCalendarData }: CalendarProps) {
  return (
    <Container>
      <SideBar />

      <CalendarContent>
        <header>
          <h2>Eventos</h2>
        </header>

        <main>
          <div className="selectTypeEvent">
            <h3>Selecione a categoria</h3>

            <div>
              <select>
                <option value="">Eventos</option>
                <option value="">Provas</option>
              </select>

              <MdArrowDropDown />
            </div>
          </div>

          <div>
            <Event
              label="Reunião Pais e Mestres"
              onClick={onSetCalendarData}
            />
            <Event label="Reunião Pais e Mestres" />
            <Event label="Reunião Pais e Mestres" />
            <Event label="Reunião Pais e Mestres" />
            <Event label="Reunião Pais e Mestres" />
          </div>
        </main>
      </CalendarContent>
    </Container>
  );
}