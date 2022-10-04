import React from "react";
import styled from "styled-components";

import type { Suggestions } from "hooks/useAutosuggest";

import Results from "./Results";

export const AutoSuggestWrapper = styled.div`
  display: block;
  padding: 12px 0 8px 0;
  position: absolute;
  top: -4px;
  left: 0;
  right: 0;
  border-radius: 0 0 5px 5px;
  box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.26);
  background-color: white;
  z-index: 900;
`;

type Props = Suggestions & {
  keyboardNavigation: (e: KeyboardEvent) => void;
};

export default function SearchSuggestion({
  brands,
  categories,
  items,
  keyword,
  didYouMean,
  keyboardNavigation,
}: Props): JSX.Element {
  return (
    (!!brands?.length ||
      !!categories?.length ||
      !!items?.length ||
      !!didYouMean?.length) && (
      <AutoSuggestWrapper className="auto-suggest-wrapper">
        <Results
          brands={brands}
          categories={categories}
          items={items}
          keyword={keyword}
          didYouMean={didYouMean}
          keyboardNavigation={keyboardNavigation}
        />
      </AutoSuggestWrapper>
    )
  );
}
