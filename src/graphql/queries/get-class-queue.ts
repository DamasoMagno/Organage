import { gql } from "@apollo/client";

export const GET_QUEUE = gql`
  query Queue($id: ID!) {
    fila(where: {id: $id}) {
      turma {
        ... on Turma {
          id
          nome
        }
      }
    }
  }
`;