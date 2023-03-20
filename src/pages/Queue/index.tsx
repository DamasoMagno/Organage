import { useEffect, useState } from "react";

import { IQueue } from "interfaces/IQueue";

import { client } from "libs/apollo";
import { GET_QUEUE } from "graphql/queries/get-queue";

import { Header } from "components/Header";
import { Loader } from "components/Skeleton";

import { Content, ClassPosition } from "./styles";

interface IClass {
  className: string;
  queueId: string;
}


export function Queue() {
  const [queue, setQueue] = useState<IQueue[]>([]);
  const [loading, setLoading] = useState(true);

  const [ourClass, setOurClass] = useState<IClass>(() => {
    const classData = JSON.parse(localStorage.getItem("@school") as string);
    return !classData ? {} : classData
  });


  useEffect(() => {
    client.query({
      query: GET_QUEUE,
      variables: {
        id: ourClass.queueId
      }
    })
      .then(({ data }) => setQueue(data.fila.turma))
      .finally(() => setLoading(false))
  }, []);


  return (
    <>
      <Header />
      <Content>
        <header>
          <h2>Ordem Fila</h2>
        </header>

        <main>
          {!loading ? (
            queue.map((classInfo: IQueue, classPosition: number) => (
              <ClassPosition
                key={classInfo.id}
                isOwnClass={classInfo.nome === ourClass.className}
              >
                <span>{classPosition + 1}</span>
                <p>{classInfo.nome}</p>
              </ClassPosition>
            ))
          ) : <Loader />}
        </main>
      </Content>
    </>
  );
}