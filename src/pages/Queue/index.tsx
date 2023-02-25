import { useEffect, useState } from "react";

import { client } from "libs/apollo";

import { IQueue } from "interfaces/IQueue";

import { GET_QUEUE } from "graphql/queries/get-class-queue";

import { Header } from "components/Header";
import { Skeleton } from "components/Item/SkeletonLoader";

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

    if(!classData) {
      return {}
    }

    return classData;
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
          ) : (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          )}
        </main>
      </Content>
    </>
  );
}