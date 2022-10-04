import React, { useCallback, useEffect } from "react";
import styled, { css } from "styled-components";

import useShoppingConfig from "hooks/useShoppingConfig";
import type { Suggestions } from "hooks/useAutosuggest";
import useTracking from "hooks/useTracking";

import { fontSizeSmall, fontWeightBold, fontSizeSmaller } from "lib/theme";
import media from "lib/media";

const Line = styled.hr`
  background: lightGray;
  height: 1px;
  width: 100%;
  border: none;
  margin: 10px 0;
`;

const Ellipsis = css`
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const Anchor = styled.a`
  display: block;
  color: black;
  line-height: 2.6;
  text-decoration: none;
  color: #000000;
  ${fontSizeSmall}
  padding-left: .9em;

  /* multi line ellipsis */
  overflow: hidden;
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  /* end */

  &:hover,
  &:focus {
    outline: none;
    background: #f5f5f5;
    cursor: pointer;
  }

  ${media.lessThan("sm")`
    padding-left: 0;
  `}
`;

const TitleDetail = styled.span`
  display: block;
  padding-left: 0.85em;
  font-weight: 500;
  line-height: 2;
  ${Ellipsis};

  ${media.lessThan("sm")`
    padding-left: 0;
  `}
`;

const DidYouMean = styled.span`
  display: block;
  margin-left: 1em;
  line-height: 2.6;
  font-family: Arial;
  ${fontSizeSmaller};
  color: #4a4a4a;

  ${media.lessThan("sm")`
    margin-left: 0;
  `}
`;

const ColorPhrase = styled.strong`
  color: #654bb9;
  ${fontWeightBold}
  display: inline-block;
`;

type Props = Suggestions & {
  onSelect?: () => void;
  keyboardNavigation?: (e: KeyboardEvent) => void;
};

interface ColorNameProps {
  name: string;
  keyword: string;
}

function NameWithColor({ name, keyword }: ColorNameProps): JSX.Element {
  const result = new RegExp(
    `^(?<before>.*)(?<keyword>${keyword})(?<after>.*)$`,
    "ig",
  ).exec(name);

  return result ? (
    <>
      {result?.groups?.before}
      <ColorPhrase>{result?.groups?.keyword}</ColorPhrase>
      {result?.groups?.after}
    </>
  ) : (
    <>{name}</>
  );
}

export default function Results({
  keyword,
  didYouMean,
  brands,
  categories,
  items,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSelect = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  keyboardNavigation = () => {},
}: Props): JSX.Element {
  const [trackEvent] = useTracking();
  const { shoppingURL, anchorComponent: AnchorComponent } = useShoppingConfig();

  const onAnchorSelection = useCallback(
    (e) => {
      (document?.activeElement as HTMLInputElement)?.blur?.();
      onSelect();
      trackEvent("fvg.autosuggest.click-suggestion", {
        type: e.currentTarget.className.replace("anchor-", ""),
        text: e.currentTarget.textContent,
        position: e.currentTarget.dataset.position,
        keyword,
      });
    },
    [onSelect],
  );

  const upperCase = (word) => {
    return word[0].toUpperCase() + word.slice(1, word.length);
  };

  useEffect(() => {
    if (
      didYouMean?.length ||
      categories?.length ||
      items?.length ||
      brands?.length
    ) {
      window.addEventListener("keydown", keyboardNavigation);
    }

    return () => window.removeEventListener("keydown", keyboardNavigation);
  }, [didYouMean, brands, categories, items]);

  return (
    <>
      {!!didYouMean?.length &&
        !categories?.length &&
        !items?.length &&
        !brands?.length && (
          <>
            <DidYouMean>Quisiste decir</DidYouMean>
            {didYouMean.map((suggestion, i) => {
              return (
                <AnchorComponent
                  key={suggestion}
                  href={shoppingURL(`/l/?keyword=${suggestion}`)}
                  className="anchor-suggestions"
                  onClick={onAnchorSelection}
                  data-position={i}
                  style={{ textDecoration: "none" }}
                >
                  <Anchor as="span" data-suggestion-index={i + 1} tabIndex={0}>
                    <ColorPhrase>{upperCase(suggestion)}</ColorPhrase>
                  </Anchor>
                </AnchorComponent>
              );
            })}
          </>
        )}

      {categories?.map(({ name, slug }, i) => (
        <AnchorComponent
          key={slug + keyword}
          href={shoppingURL(`/l/?categorias=${slug}&keyword=${keyword}`)}
          className="anchor-categories"
          onClick={onAnchorSelection}
          data-position={i}
          style={{ textDecoration: "none" }}
        >
          <Anchor as="span" data-suggestion-index={i + 1} tabIndex={0}>
            <ColorPhrase>{keyword}</ColorPhrase>
            {" en "}
            {name}
          </Anchor>
        </AnchorComponent>
      ))}
      {!!items?.length && (
        <>
          <Line />
          <TitleDetail>Productos</TitleDetail>
        </>
      )}
      {items?.map(({ name, sku, slug }, i) => (
        <AnchorComponent
          key={sku}
          href={shoppingURL(`/p/${slug}-${sku}`)}
          className="anchor-items"
          onClick={onAnchorSelection}
          data-position={i}
          style={{ textDecoration: "none" }}
        >
          <Anchor
            as="span"
            data-suggestion-index={i + categories.length + 1}
            tabIndex={0}
          >
            <NameWithColor name={name} keyword={keyword} />
          </Anchor>
        </AnchorComponent>
      ))}
      {!!brands?.length && (
        <>
          <Line />
          <TitleDetail>Marcas</TitleDetail>
        </>
      )}
      {brands?.map(({ name, slug }, i) => (
        <AnchorComponent
          key={slug + keyword}
          href={shoppingURL(`/l/?marcas=${slug}&keyword=${keyword}`)}
          className="anchor-brands"
          onClick={onAnchorSelection}
          data-position={i}
          style={{ textDecoration: "none" }}
        >
          <Anchor
            as="span"
            data-suggestion-index={i + categories.length + items.length + 1}
            tabIndex={0}
          >
            <ColorPhrase>{keyword}</ColorPhrase>
            {" en "}
            {name}
          </Anchor>
        </AnchorComponent>
      ))}
    </>
  );
}
