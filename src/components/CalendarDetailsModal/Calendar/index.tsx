import { useEffect, useState } from "react";
import parse from "html-react-parser";

import { useModal } from "contexts/useModal";

import { client } from "libs/apollo";
import { GET_EVENT_DETAILS } from "graphql/queries/get-event";

import { IEvent } from "interfaces/IEvent";

import { EventContent } from "./styles";
import { formatHourOfDay } from "utils/format-hour-of-day";


export function Calendar() {
  const { state } = useModal();

  const [event, setEvent] = useState({} as IEvent);

  useEffect(() => {
    if (!state.id) return;

    client.query({
      query: GET_EVENT_DETAILS,
      variables: {
        id: String(state.id)
      }
    })
      .then(({ data }) => setEvent(data.evento))
  }, []);

  function showDescriptionDetails() {
    if (!event.descricao) return

    let markdownToHTMLConverter = parse(event.descricao.html)
    return markdownToHTMLConverter
  }

  return (
    <EventContent>
      <header>
        <strong>{event.nome}</strong>
        <time>{formatHourOfDay(event.createdAt)}</time>
      </header>

      <span>Descrição</span>
      {showDescriptionDetails()}
    </EventContent>
  );
}