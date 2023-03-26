import { useContext, useEffect, useState } from "react";
import { formatHourOfDay } from "utils/format-hour-of-day";
import { useClassInfo } from "contexts/ClassContext";

import { ISchedule } from "interfaces";

import { client } from "libs/apollo";
import { GET_SCHEDULES_DAYS } from "graphql/queries/get-schedule-days";
import { GET_SCHEDULES } from "graphql/queries/get-schedules";

import { Header } from "components/Header";
import { Options } from "components/Options";

import { Content, ScheduleList } from "./styles";
import { Loader } from "components/Skeleton";


export function Schedules() {
  const { classInfo } = useClassInfo()

  const [schedules, setSchedules] = useState<ISchedule[]>([])
  const [matters, setMatters] = useState([])
  const [scheduleDaySelected, setScheduleDaySelected] = useState<string>("Terca")

  const [scheduleDaysLoading, setScheduleDaysLoading] = useState<boolean>(true);
  const [mattersLoading, setMettersLoading] = useState<boolean>(true);

  useEffect(() => {
    client.query({
      query: GET_SCHEDULES_DAYS,
      variables: {
        nome_turma: classInfo?.className
      }
    })
      .then(({ data }) => setSchedules(data.horarios))
      .finally(() => setScheduleDaysLoading(false))
  }, []);

  useEffect(() => {
    setMettersLoading(true)

    client.query({
      query: GET_SCHEDULES,
      variables: {
        nome_turma: classInfo?.className,
        dia: scheduleDaySelected
      }
    })
      .then(({ data }) => setMatters(data.horarios[0].materias))
      .finally(() => setMettersLoading(false))
  }, [scheduleDaySelected]);

  let scheduleDays = schedules.map(schedules => schedules.dia)

  return (
    <>
      <Header />
      <Content>
        <header>
          <h2>Horários</h2>
        </header>

        <main>
          <div>
            <Options
              isLoading={scheduleDaysLoading}
              values={scheduleDays}
              onSelectValue={setScheduleDaySelected}
              valueSelected={scheduleDaySelected}
            />

            <ScheduleList>
              {!mattersLoading ?
                matters.map((matter: any) => (
                  <li key={matter.id}>
                    <strong>{matter.nome}</strong>
                    <span>{formatHourOfDay(matter.horaInicio)}</span>
                  </li>
                )) : (
                  <Loader />
                )}
            </ScheduleList>
          </div>
        </main>
      </Content>
    </>
  );
}