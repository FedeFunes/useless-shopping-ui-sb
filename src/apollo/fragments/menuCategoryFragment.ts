import { gql } from "@apollo/client";

export default gql`
  fragment menuCategory on MenuCategory {
    id
    createdTime
  }
`;
