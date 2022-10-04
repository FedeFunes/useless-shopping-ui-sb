import React from "react";
import styled from "styled-components";

import Cart from "./Cart";

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
`;

const data = {
  id: "",
  items: [
    {
      sku: {
        code: "86002236",
        title: "Biblioteca Mini 5 Estantes Paraiso",
        slug: "biblioteca-mini-5-estantes-paraiso",
        pricing: {
          salePrice: 1691,
          listPrice: 3626,
          discount: 53,
        },
        image: "1b6ab7f524ca5168e61b4e88163136c5.jpg",
        stock: {
          labels: ["HOME_DELIVERY_IN_48_HOURS"],
        },
      },
      quantity: 1,
    },
    {
      sku: {
        code: "10070",
        title: "TOSTADORA PHILIPS HD-2569",
        slug: "tostadora-philips-hd-2569",
        pricing: {
          salePrice: 11000,
          listPrice: 11000,
          discount: 0,
        },
        image: "6841167791837ad31a8962f68d42df95.jpg",
        stock: {
          labels: [],
        },
      },
      quantity: 1,
    },
  ],
};

export default {
  title: "Cart",
  component: Cart,
};

export const Default = (): React.ReactNode => (
  <CartWrapper>
    <Cart
      cart={data}
      onRemoveItem={() => window.alert("Borraste todos los productos")}
      onContinueBuying={() => ""}
    />
  </CartWrapper>
);
