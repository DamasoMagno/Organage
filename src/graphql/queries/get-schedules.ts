import { gql } from "@apollo/client";

export const GET_SCHEDULES = gql`
  query Schedule($nome_turma: String!, $dia: Dia) {
    horarios(where: {turma: {nome: $nome_turma}, dia: $dia}) {
      materias {
        id
        nome
        horaInicio
      }
    }
  }
`;