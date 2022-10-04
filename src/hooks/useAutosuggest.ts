import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import useFeature from "./useFeature";
import useShoppingDefaultGeoLocation from "./useShoppingDefaultGeoLocation";
import useShoppingGeoLocation from "./useShoppingGeoLocation";

const vtexSearchSuggestionsQuery = gql`
  query searchSuggestion($keyword: String!) {
    searchSuggestion(keyword: $keyword) {
      type
      name
      slug
      sku: itemId
    }
  }
`;

const fravegaSearchSuggestionsQuery = gql`
  query searchSuggestions(
    $keyword: String!
    $didYouMeanLimit: Int
    $postalId: String
    $brandsLimit: Int
    $categoriesLimit: Int
    $itemsLimit: Int
    $includeBrands: Boolean!
    $includeCategories: Boolean!
    $includeItems: Boolean!
  ) {
    brands: brandsSuggestions(
      keyword: $keyword
      postalCode: $postalId
      limit: $brandsLimit
    ) @include(if: $includeBrands) {
      slug
      name
    }
    categories: categoriesSuggestions(
      keyword: $keyword
      postalCode: $postalId
      limit: $categoriesLimit
    ) @include(if: $includeCategories) {
      slug
      name
    }
    items: productsSuggestions(
      keyword: $keyword
      postalCode: $postalId
      limit: $itemsLimit
    ) @include(if: $includeItems) {
      slug
      name
      sku
      image
    }
    didYouMean: recommendationsSuggestions(
      keyword: $keyword
      postalCode: $postalId
      limit: $didYouMeanLimit
    ) {
      products
    }
  }
`;

interface BrandSuggestion {
  slug: string;
  name: string;
}

interface CategorySuggestion {
  slug: string;
  name: string;
}

interface ItemSuggestion {
  slug: string;
  name: string;
  sku: string;
  image?: string;
}

interface DidYouMean {
  products: string[];
}

export interface Suggestions {
  keyword: string;
  brands: BrandSuggestion[];
  categories: CategorySuggestion[];
  items: ItemSuggestion[];
  didYouMean: string[];
}

interface VtexSuggestion {
  type: string;
  name: string;
  slug: string;
  sku: string;
}

interface VtexResult {
  searchSuggestion: VtexSuggestion[];
}

interface Result {
  brands: BrandSuggestion[];
  categories: CategorySuggestion[];
  items: ItemSuggestion[];
  didYouMean: DidYouMean;
}

interface VtexVariables {
  keyword: string;
}

interface autoSuggestOptions {
  brandsLimit?: number;
  categoriesLimit?: number;
  itemsLimit?: number;
  includeBrands?: boolean;
  includeCategories?: boolean;
  includeItems?: boolean;
  didYouMeanLimit?: number;
}

type Variables = autoSuggestOptions & {
  keyword: string;
  postalId?: string;
};

/**
 * Vtex returns labels as category name.
 * This function exists in order to extract the category name from such labels.
 *
 * @param {string} name vtex category suggestion name
 * @param {string} keyword keyword searched
 * @returns {string} category name
 */
function getCategoryName(name: string): string {
  const result = /(?:em|en|in)\s+(?<categoryName>.*)$/gi.exec(name);
  return result?.groups?.categoryName?.trim();
}

function isKeywordTooShort(keyword: string): boolean {
  return keyword?.length < 2;
}

export default function useAutosuggest(
  keyword: string,
  {
    brandsLimit,
    categoriesLimit,
    itemsLimit,
    includeBrands,
    includeCategories,
    includeItems,
    didYouMeanLimit,
  }: autoSuggestOptions = {},
): Suggestions {
  const [suggestions, setSuggestions] = useState({
    keyword: "",
    brands: [],
    items: [],
    categories: [],
    didYouMean: [],
  });

  useEffect(() => {
    if (isKeywordTooShort(keyword)) {
      setSuggestions({
        keyword: "",
        brands: [],
        items: [],
        categories: [],
        didYouMean: [],
      });
    }
  }, [keyword]);

  const [featureFravegaSearchSuggestions] = useFeature(
    "fravegaSearchSuggestions",
  );

  const [geoLocation] = useShoppingGeoLocation();
  const [defaultGeoLocation] = useShoppingDefaultGeoLocation();

  useQuery<VtexResult, VtexVariables>(vtexSearchSuggestionsQuery, {
    variables: { keyword },
    onCompleted: (data) => {
      setSuggestions({
        keyword,
        brands: [],
        categories: (data?.searchSuggestion ?? [])
          .filter((x) => x.type === "category")
          .map((s) => ({ ...s, name: getCategoryName(s.name) })),
        items: (data?.searchSuggestion ?? []).filter((x) => x.type === "item"),
        didYouMean: [],
      });
    },
    skip: featureFravegaSearchSuggestions || isKeywordTooShort(keyword),
  });

  useQuery<Result, Variables>(fravegaSearchSuggestionsQuery, {
    onCompleted: (data) => {
      setSuggestions({
        keyword,
        brands: data?.brands ?? [],
        categories: data?.categories ?? [],
        items: data?.items ?? [],
        didYouMean: data?.didYouMean.products ?? [],
      });
    },
    variables: {
      keyword,
      postalId: (geoLocation || defaultGeoLocation)?.id,

      brandsLimit: brandsLimit ?? 10,
      categoriesLimit: categoriesLimit ?? 5,
      itemsLimit: itemsLimit ?? 10,
      includeBrands: includeBrands ?? false,
      includeCategories: includeCategories ?? true,
      includeItems: includeItems ?? true,
      didYouMeanLimit: didYouMeanLimit ?? 1,
    },
    skip: !featureFravegaSearchSuggestions || isKeywordTooShort(keyword),
  });

  return suggestions;
}
