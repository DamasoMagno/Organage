import { useEffect, useState } from "react";
import { gql } from "@apollo/client";

import { client } from "libs/apollo";

import { EventContent } from "./styles";
import { useModal } from "contexts/useModal";

const GET_EVENT_DETAILS = gql`
  query Evento ($id: ID!) {
    evento(where: {id: $id}) {
      id
      nome
      descricao
      createdAt
    }
  }
`;

interface Event {
  id: string;
  nome: string;
  descricao: string;
  createdAt: any;
}

export function Calendar() {
  const { modal } = useModal();

  const [event, setEvent] = useState({} as Event);

  useEffect(() => {
    client.query({
      query: GET_EVENT_DETAILS,
      variables: {
        id: String(modal.id)
      }
    })
      .then(({ data }) => setEvent(data.evento))
      .catch(data => console.log(data))
  }, []);

  return (
    <EventContent>
      <header>
        <strong>{event.nome}</strong>
        <time>{new Date(event.createdAt).getHours()}</time>
      </header>

      <span>Descrição</span>
      <p>{event.descricao}</p>
    </EventContent>
  );
}