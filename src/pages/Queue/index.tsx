import { useEffect, useState } from "react";
import { gql } from '@apollo/client';

import { client } from "libs/apollo";

import { Header } from "components/Header";

import { Content, ClassPosition } from "./styles";

const GET_QUEUE = gql`
  query Fila ($id: ID!) {
    fila(where: {id: $id}) {
      turma {
        ... on Turma {
          id
          nome
        }
      }
    }
  }
`;

interface Queue {
  id: string;
  nome: string;
}

export function Queue() {
  const [queue, setQueue] = useState<Queue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.query({
      query: GET_QUEUE,
      variables: {
        id: "clbr6acp90ssc0alwgqt154cv"
      }
    })
      .then(({ data }) => setQueue(data.fila.turma))
      .catch(data => console.log(data))
      .finally(() => setLoading(false))
  }, []);

  if (loading) {
    return <h1>Carregando</h1>
  }

  return (
    <>
      <Header />

      <Content>
        <header>
          <h2>Ordem Fila</h2>
        </header>

        <main>
          {queue.map((
            classInfo: Queue,
            classPosition: number
          ) => (
            <ClassPosition
              key={classInfo.id}
              isOwnClass={classInfo.nome === "1º Redes de Computadores"}
            >
              <span>{classPosition + 1}</span>

              <p className="class">
                {classInfo.nome}
              </p>
            </ClassPosition>
          ))}
        </main>
      </Content>
    </>
  );
}