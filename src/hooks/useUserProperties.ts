import { gql, useQuery } from "@apollo/client";
import { DataUser, User } from "apollo/types/User";

const GET_USER = gql`
  query authenticatedUser {
    authenticatedUser {
      email
      profile {
        firstName
        lastName
      }
    }
  }
`;

export default function useUserProperties(): User {
  const { data } = useQuery<DataUser>(GET_USER);
  return data?.authenticatedUser;
}
