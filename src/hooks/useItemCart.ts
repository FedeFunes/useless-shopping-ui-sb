import { gql, useMutation } from "@apollo/client";

import { Cart } from "apollo/types/User";
import getUserToken from "lib/shoppingUser";

import useShoppingGeoLocation from "hooks/useShoppingGeoLocation";

import cartItemFragment from "apollo/fragments/cartItemFragment";
import { useMemo } from "react";

const UPDATE_ITEM_INCREASE_MUTATION = gql`
  mutation cartIncreaseUpdate(
    $id: NonEmptyString!
    $postalCode: PostalId
    $sku: NonEmptyString!
    $quantity: PositiveInt!
  ) {
    items: cartIncreaseUpdate(
      id: $id
      postalCode: $postalCode
      sku: $sku
      quantity: $quantity
    ) {
      ...cartItemFragment
    }
  }
  ${cartItemFragment}
`;

const UPDATE_ITEM_DECREASE_MUTATION = gql`
  mutation cartDecreaseUpdate(
    $id: NonEmptyString!
    $postalCode: PostalId
    $sku: NonEmptyString!
    $quantity: PositiveIntOrZero!
  ) {
    items: cartDecreaseUpdate(
      id: $id
      postalCode: $postalCode
      sku: $sku
      quantity: $quantity
    ) {
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
  sku?: string;
  quantity?: number;
}

export default function useItemCart(): [
  (skus: string, quantity: number) => Promise<Result>,
  (skus: string, quantity: number) => Promise<Result>,
  boolean,
] {
  const [CP] = useShoppingGeoLocation();
  const token = getUserToken();

  const [execIncrease, { loading: loadingIncrease }] = useMutation<
    Result,
    Variables
  >(UPDATE_ITEM_INCREASE_MUTATION, {
    refetchQueries: ["cart"],
    variables: { id: token, postalCode: CP?.id },
  });

  const [execDecrease, { loading: loadingDecrease }] = useMutation<
    Result,
    Variables
  >(UPDATE_ITEM_DECREASE_MUTATION, {
    refetchQueries: ["cart"],
    variables: { id: token, postalCode: CP?.id },
  });

  function increaseItem(sku: string, quantity: number): Promise<Result> {
    return execIncrease({ variables: { sku, quantity } }).then(({ data }) => {
      return data;
    });
  }

  function decreaseUpdate(sku: string, quantity: number): Promise<Result> {
    return execDecrease({ variables: { sku, quantity } }).then(({ data }) => {
      return data;
    });
  }

  const isAllLoading = useMemo(() => loadingDecrease || loadingIncrease, [
    loadingDecrease,
    loadingIncrease,
  ]);

  return [increaseItem, decreaseUpdate, isAllLoading];
}
