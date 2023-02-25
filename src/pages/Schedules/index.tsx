import { useEffect, useState } from "react";

import { ISchedule } from "interfaces/ISchedule";

import { client } from "libs/apollo";

import { GET_SCHEDULES_DAYS } from "graphql/queries/get-schedule-days";
import { GET_SCHEDULES } from "graphql/queries/get-schedules";

import { Header } from "components/Header";
import { Options } from "components/Options";

import { Content, ScheduleList } from "./styles";


export function Schedules() {
  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const [scheduleDaySelected, setScheduleDaySelected] = useState<string>("Terca");

  const [loading, setLoading] = useState<boolean>(true);


  const [className, setClassName] = useState<string>(() => {
    const school = JSON.parse(localStorage.getItem("@school") as string);
    return !school ? {} : school.className;
  });

  useEffect(() => {
    client.query({
      query: GET_SCHEDULES_DAYS,
      variables: {
        nome_turma: className
      }
    })
      .then(({ data }) => setSchedules(data.horarios))
      .finally(() => setLoading(false))
  }, []);

  useEffect(() => {
    client.query({
      query: GET_SCHEDULES,
      variables: {
        nome_turma: className,
        dia: scheduleDaySelected
      }
    })
      .then(({ data }) => setSchedules(data.horarios[0].materias))
      .finally(() => setLoading(false))
  }, [scheduleDaySelected]);

  let scheduleDays = schedules.map(schedules => schedules.dia);

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
              values={scheduleDays}
              onSelectValue={setScheduleDaySelected}
              valueSelected={scheduleDaySelected}
            />

            <ScheduleList>
              <li>
                <strong>Matemática</strong>
                <span>12:00</span>
              </li>
              <li>
                <strong>Matemática</strong>
                <span>12:00</span>
              </li>
              <li>
                <strong>Matemática</strong>
                <span>12:00</span>
              </li>
              <li>
                <strong>Matemática</strong>
                <span>12:00</span>
              </li>
              <li>
                <strong>Matemática</strong>
                <span>12:00</span>
              </li>
            </ScheduleList>
          </div>
        </main>
      </Content>
    </>
  );
}