import { gql } from "@apollo/client";

export const GET_SCHEDULES_DAYS = gql`
  query ScheduleDays($nome_turma: String!) {
    horarios(where: {turma: {nome: $nome_turma}}) {
      id
      dia
    }
  }
`;