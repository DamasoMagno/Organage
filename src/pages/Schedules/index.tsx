import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { gql } from "@apollo/client";

import { client } from "libs/apollo";
import { useModal } from "contexts/useModal";

import { Header } from "components/Header";
import { Item as Schedule } from "components/Item";

import { Content } from "./styles";

const GET_SCHEDULES = gql`
  query Horarios {
    horarios {
      id
      dia
    }
  }
`;

interface Schedules {
  id: string;
  dia: string;
}

export function Schedules() {
  const { setModal } = useModal();

  const [schedule, setSchedule] = useState<Schedules[]>([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    client.query({
      query: GET_SCHEDULES,
    })
      .then(({ data }) => {
        console.log(data);
        setSchedule(data.horarios)
      })
      .catch(data => console.log(data))
      .finally(() => setLoading(false))
  }, []);


  const openScheduleModal = (id: string) => {
    setModal({
      isOpen: true,
      type: "Schedule",
      id
    });
  }

  if (loading) {
    return <CircleLoader />
  }

  return (
    <>
      <Header />
      <Content>
        <header>
          <h2>Horários</h2>
        </header>

        <main>
          <div>
            {schedule.map((day: Schedules) => (
              <Schedule
                key={day.id}
                onClick={() => openScheduleModal(day.id)}
              >
                {day.dia}
              </Schedule>
            ))}
          </div>
        </main>
      </Content>
    </>
  );
}