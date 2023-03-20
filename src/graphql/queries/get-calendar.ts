import { gql } from "@apollo/client";

export const GET_CALENDAR = gql`
  query Calendar($nome_turma: String!, $data: Date!) {
    calendarios(
      where: {
        turmas_some: {
          nome: $nome_turma
        }, 
        data: $data
      }
    ) {
      eventos {
        id
        nome
        horario
      }
    }
  }
`;