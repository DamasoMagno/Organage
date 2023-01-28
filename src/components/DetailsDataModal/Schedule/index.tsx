import { useEffect,  useState } from "react";
import { gql } from "@apollo/client";

import { client } from "libs/apollo";
import { useModal } from "contexts/useModal";

import { ScheduleContent } from "./styles";

const GET_SCHEDULE = gql`
  query Horario ($id: ID!) {
    horario(where: {id: $id}) {
      dia
      materias {
        nome
        horaInicio
      }
    }
  }
`;

interface Schedule {
  dia: string;
  materias: {
    nome: string;
    horaInicio: any;
  }[]
}

export function Schedule() {
  const { modal } = useModal();

  const [schedule, setSchedule] = useState({} as Schedule);

  useEffect(() => {
    client.query({
      query: GET_SCHEDULE,
      variables: {
        id: modal.id
      }
    })
    .then(({ data }) => setSchedule(data.horario))
    .catch(data => console.log(data))
  }, []);
  
  return (
    <ScheduleContent>
      <strong>{schedule.dia}</strong>

      <ul>
        {schedule.materias?.map((materia: any) => {
          const formatMatter = {
            nome: materia.nome,
            hora: 
              new Date(materia.horaInicio).
                  getHours().
                  toString().
                  padStart(2, '0')
          }
        
          return (
            <li key={`${formatMatter.nome} - ${formatMatter.hora}`}>
              {formatMatter.nome}
              <span>{formatMatter.hora}:00</span>
            </li>
          )
        })}
      </ul>
    </ScheduleContent>
  );
}