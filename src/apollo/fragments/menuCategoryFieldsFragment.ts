import { gql } from "@apollo/client";

export default gql`
  fragment menuCategoryFields on MenuCategoryFields {
    name
    href
    parent_category
    view_more
    column
    order
  }
`;
