import { useState, useEffect } from "react";
import { WarningCircle } from "phosphor-react"

import { IEvent } from "interfaces";

import { useModal } from "contexts/ModalContext";

import { client } from "libs/apollo";
import { GET_CALENDAR } from "graphql/queries/get-calendar";

import { Header } from "components/Header";
import { Item as Event } from "components/Item";
import { ReactCalendar } from "components/ReactCalendar";
import { CalendarDetailsModal } from "components/CalendarDetailsModal";
import { Loader } from "components/Skeleton";

import { Content } from "./styles";
import { useClassInfo } from "contexts/ClassContext";


export function Calendar() {
  const { dispatch } = useModal();
  const { classInfo } = useClassInfo()

  const [events, setEvents] = useState<IEvent[]>([]);
  const [date, setDate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!date) {
      setLoading(false)
      return
    }

    setLoading(true)

    client.query({
      query: GET_CALENDAR,
      variables: {
        nome_turma: classInfo?.className,
        data: date
      }
    })
      .then(({ data }) => {
        if (!data.calendarios.length) {
          setEvents([])
          return
        };

        let events = data.calendarios[0].eventos
        setEvents(events)
      })
      .finally(() => setLoading(false))
  }, [date]);

  function handleSelectFormattedDate(newDate: Date) {
    let formattedDate = new Intl.DateTimeFormat('fr-CA').format(newDate)
    setDate(formattedDate)
  }

  const openCalendarModal = (id?: string) => {
    if (!id) return
    dispatch({ type: "OPEN_CALENDAR", payload: { id } })
  }

  function sowAllEvents() {
    if (loading) {
      return <Loader />
    }

    if (events.length === 0) {
      return (
        <div className="noContent">
          <span>Nenhum Evento Encontrado</span>
        </div>
      )
    }

    return events.map((event) => (
      <Event key={event.id} onClick={() => openCalendarModal(event.id)}>
        {event.nome}
      </Event>
    ))
  }


  return (
    <>
      <Header />
      <Content>
        <header>
          <h2>Eventos</h2>
        </header>

        <main>
          <ReactCalendar onSelectDate={handleSelectFormattedDate} />
          {sowAllEvents()}
        </main>
      </Content>

      <CalendarDetailsModal />
    </>
  );
}