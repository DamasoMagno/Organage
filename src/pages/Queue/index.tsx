import { useContext, useEffect, useState } from "react";

import { IQueue } from "interfaces";

import { client } from "libs/apollo";
import { GET_QUEUE } from "graphql/queries/get-queue";

import { Header } from "components/Header";
import { Loader } from "components/Skeleton";

import { Content, ClassPosition } from "./styles";
import { useClassInfo } from "contexts/ClassContext";

interface IClass {
  className: string;
  queueId: string;
}


export function Queue() {
  const { classInfo } = useClassInfo()
  
  const [queue, setQueue] = useState<IQueue[]>([])
  const [loading, setLoading] = useState<boolean>(true)


  useEffect(() => {
    client.query({
      query: GET_QUEUE,
      variables: {
        id: String(classInfo?.queueId)
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
            queue.map((classData: IQueue, classPosition: number) => (
              <ClassPosition
                key={classData.id}
                isOwnClass={classData.nome === classInfo?.className}
              >
                <span>{classPosition + 1}</span>
                <p>{classData.nome}</p>
              </ClassPosition>
            ))
          ) : <Loader />}
        </main>
      </Content>
    </>
  );
}