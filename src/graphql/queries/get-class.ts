import { gql } from "@apollo/client";

export const GET_CLASS = gql`
  query Class($email: String!) {
    turmas(where: {estudantes_some: {email: $email}}) {
      nome
      fila {
        id
      }
    }
  }
`;