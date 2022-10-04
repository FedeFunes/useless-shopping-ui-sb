import { gql, useMutation } from "@apollo/client";

import { Cart } from "apollo/types/User";

import useShoppingDefaultGeoLocation from "hooks/useShoppingDefaultGeoLocation";
import useShoppingGeoLocation from "hooks/useShoppingGeoLocation";

import cartItemFragment from "apollo/fragments/cartItemFragment";

const REMOVE_ITEM_MUTATION = gql`
  mutation cartItemRemove(
    $id: NonEmptyString!
    $postalCode: PostalId
    $skus: [NonEmptyString!]!
  ) {
    items: cartItemRemove(id: $id, postalCode: $postalCode, skus: $skus) {
      ...cartItemFragment
    }
  }
  ${cartItemFragment}
`;

export interface Result {
  items: Cart[];
}

interface Variables {
  id?: string;
  postalCode?: string;
  skus?: string | string[];
}

export default function useRemoveItemCart(
  shoppingCartId: string,
): [(skus: string | string[]) => Promise<Result>] {
  const [CP] = useShoppingGeoLocation();
  const [defaultCP] = useShoppingDefaultGeoLocation();

  const [exec] = useMutation<Result, Variables>(REMOVE_ITEM_MUTATION, {
    refetchQueries: ["cart"],
    variables: { id: shoppingCartId, postalCode: (CP || defaultCP)?.id },
  });

  function removeItem(skus: string | string[]): Promise<Result> {
    return exec({ variables: { skus } }).then(({ data }) => {
      return data;
    });
  }

  return [removeItem];
}
