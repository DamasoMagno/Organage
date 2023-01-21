import { useState } from "react";
import { CaretDown } from "phosphor-react";

import { useModal } from "contexts/useModal";
import { calendar } from "../../../database";

import { Header } from "components/Header";
import { Item as Event } from "components/Item";

import { Content, Select } from "./styles";

const mounths = [
  "Janeiro", "Fervereiro", "Março", "Abril", "Maio", "Junho", "Julho",
  "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
]

export function Calendar() {
  const { setModal } = useModal();

  const [currentDay, setCurrentDay] = useState(0);
  const [mounth, setMounth] = useState(1);

  const openCalendarModal = () =>
    setModal({
      isOpen: true,
      type: "Calendar",
      id: String("")
    });

  function findAndSetMounth(mounthSelected: string){
    const findedMounth = mounths.findIndex(mounth => mounth === mounthSelected);
    setMounth(findedMounth + 1);
  }

  const currentYear = new Date().getFullYear();
  const daysLengthInAMount = new Date(currentYear, mounth, 0).getDate();

  return (
    <>
      <Header />

      <Content>
        <header>
          <h2>Eventos</h2>
        </header>

        <main>
          <div className="day">
            <label htmlFor="date">Selecionar Data</label>

            <div className="content">
              <Select>
                <select id="date" onChange={(e) => findAndSetMounth(e.target.value)}>
                  {
                    mounths.map(mounth => (
                      <option
                        key={mounth}
                        value={mounth}
                      >
                        {mounth}
                      </option>
                    ))
                  }
                </select>

                <CaretDown />
              </Select>

              <div className="daysQuantity">
                {Array.from({ length: daysLengthInAMount }).map((_, index) => (
                  <button
                    onClick={() => setCurrentDay(index + 1)}
                    className={
                      currentDay === index + 1 ?
                        "currentDay" :
                        ""
                    }
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="categoryEvents">
            <label htmlFor="type">
              Selecione a categoria
            </label>

            <Select>
              <select id="type">
                <option>Todos</option>
                <option>Eventos</option>
                <option>Provas</option>
              </select>

              <CaretDown />
            </Select>
          </div>

          <div>
            {calendar.map(event => (
              <Event key={event.id} onClick={openCalendarModal}>
                {event.name}
              </Event>
            ))}
          </div>
        </main>
      </Content>
    </>
  );
}