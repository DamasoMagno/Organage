import { gql } from "@apollo/client";

export const GET_SCHEDULES = gql`
  query Horarios {
    horarios {
      id
      dia
    }
  }
`;