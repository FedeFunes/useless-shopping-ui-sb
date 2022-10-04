import { gql, useQuery } from "@apollo/client";

import { Cart } from "apollo/types/User";

import getUserToken from "lib/shoppingUser";

import useShoppingDefaultGeoLocation from "hooks/useShoppingDefaultGeoLocation";
import useShoppingGeoLocation from "hooks/useShoppingGeoLocation";

import cartItemFragment from "apollo/fragments/cartItemFragment";
import useRemoveItemCart, { Result } from "hooks/useRemoveItemCart";

export const GET_CART = gql`
  query cart($id: NonEmptyString!, $postalCode: PostalId) {
    items: cart(id: $id, postalCode: $postalCode) {
      ...cartItemFragment
    }
  }
  ${cartItemFragment}
`;

interface Options {
  removeItem: (skus: string | string[]) => Promise<Result>;
}

export default function useUserCart(): [Cart, Options] {
  const [CP] = useShoppingGeoLocation();
  const [defaultCP] = useShoppingDefaultGeoLocation();
  const token = getUserToken();

  const [removeItem] = useRemoveItemCart(token);

  const { data } = useQuery<Cart>(GET_CART, {
    skip: !token,
    variables: {
      id: token,
      postalCode: (CP || defaultCP)?.id,
    },
  });

  return [data, { removeItem }];
}
