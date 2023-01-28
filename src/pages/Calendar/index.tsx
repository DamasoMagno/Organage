import { useState, useEffect, ChangeEvent } from "react";
import { CaretDown } from "phosphor-react";
import { gql } from "@apollo/client";

import { client } from "libs/apollo";
import { useModal } from "contexts/useModal";

import { Header } from "components/Header";
import { Item as Event } from "components/Item";

import { Content, Select } from "./styles";

const mounths = [
  "Janeiro", "Fervereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
]

const GET_CALENDAR = gql`
  query Calendario ($nome_turma: String!, $data:Date!) {
    calendarios (where: {turmas_some: {nome: $nome_turma}, data: $data}) {
      id
      data
      eventos {
        id
        nome
      }
    }
  }
`;

interface Events {
  id: string;
  nome: string;
}

export function Calendar() {
  const { setModal } = useModal();

  const [events, setEvents] = useState<Events[]>([]);
  const [currentDay, setCurrentDay] = useState(new Date(Date.now()).getDate());
  const [mounth, setMounth] = useState(1);


  useEffect(() => {
    client.query({
      query: GET_CALENDAR,
      variables: {
        nome_turma: "1º Redes de Computadores",
        data: formatedData
      }
    })
      .then(({ data }) => {
        let events = data.calendarios[0].eventos;
        setEvents(events);
      })
      .catch(() => setEvents([]));
  }, [mounth, currentDay]);

  const openCalendarModal = (id?: string) => {
    if (!id) return;

    setModal({
      isOpen: true,
      type: "Calendar",
      id
    });
  }

  function findAndSetMounth(e: ChangeEvent<HTMLSelectElement>) {
    let mounthSelected = e.target.value;
    const findedMounth = mounths.findIndex(
      (mounth) => mounth === mounthSelected
    );

    setMounth(findedMounth + 1);
  }

  const currentYear = new Date().getFullYear();
  const quantityDaysOnMonth = new Date(currentYear, mounth, 0).getDate();
  let formatedData = `${currentYear}-${String(mounth).padStart(2, "0")}-${String(currentDay).padStart(2, "0")}`

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
                <select id="date" onChange={findAndSetMounth}>
                  {mounths.map(mounth => (
                    <option key={mounth} value={mounth}>
                      {mounth}
                    </option>
                  ))}
                </select>

                <CaretDown />
              </Select>

              <div className="daysQuantity">
                {Array.from({ length: quantityDaysOnMonth }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDay(index + 1)}
                    className={currentDay === index + 1 ? "currentDay" : ""}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="categoryEvents">
            <label htmlFor="type">Selecione a categoria</label>

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
            {events.map((event) => (
              <Event
                key={event.id}
                onClick={() => openCalendarModal(event.id)}
              >
                {event.nome}
              </Event>
            ))}
          </div>
        </main>
      </Content>
    </>
  );
}