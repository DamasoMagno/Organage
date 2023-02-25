import { gql } from "@apollo/client";

export const GET_EVENT_DETAILS = gql`
  query Event($id: ID) {
    evento(where: {id: $id}) {
      id
      nome
      descricao {
        html
      }
      createdAt
    }
  }
`;