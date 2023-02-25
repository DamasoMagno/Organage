import { useState, useEffect } from "react";

import { client } from "libs/apollo";

import { useModal } from "contexts/useModal";

import { IEvent } from "interfaces/IEvent";

import { GET_CALENDAR } from "graphql/queries/get-calendar";

import { Header } from "components/Header";
import { Item as Event } from "components/Item";
import { ReactCalendar } from "components/ReactCalendar";

import { Content } from "./styles";


export function Calendar() {
  const { dispatch } = useModal();
  
  const [events, setEvents] = useState<IEvent[]>([]);
  const [date, setDate] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const [className, setClassName] = useState<string>(() => {
    const school = JSON.parse(localStorage.getItem("@school") as string);
    return !school ? {} : school.className;
  });

  useEffect(() => {
    if (!date) return;

    client.query({
      query: GET_CALENDAR,
      variables: {
        nome_turma: className,
        data: date
      }
    })
      .then(({ data }) => {
        if (!data.calendarios.length) {
          setEvents([]);
          return;
        };

        let events = data.calendarios[0].eventos;
        setEvents(events);
      })
      .finally(() => setLoading(false));
  }, [date]);

  function handleSelectFormattedDate(newDate: Date) {
    let formattedDate = new Intl.DateTimeFormat('fr-CA').format(newDate)
    setDate(formattedDate)
  }

  const openCalendarModal = (id?: string) => {
    if (!id) return;
    dispatch({ type: "OPEN_CALENDAR", payload: { id } })
  }

  return (
    <>
      <Header />
      <Content>
        <header>
          <h2>Eventos</h2>
        </header>

        <main>
          <ReactCalendar onSelectDate={handleSelectFormattedDate}/>

          {events.map((event) => (
            <Event
              key={event.id}
              onClick={() => openCalendarModal(event.id)}
              loading={loading}
            >
              {event.nome}
            </Event>
          ))}
        </main>
      </Content>
    </>
  );
}