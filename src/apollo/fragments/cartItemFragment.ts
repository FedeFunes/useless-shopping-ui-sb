import { gql } from "@apollo/client";

export default gql`
  fragment cartItemFragment on CartItem {
    sku {
      code
      title
      slug
      pricing(channel: "fravega-ecommerce") {
        salePrice
        listPrice
        discount
      }
      image
      stock {
        labels
      }
    }
    quantity
  }
`;
