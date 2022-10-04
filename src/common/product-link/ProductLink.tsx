import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

import useDebounce from "hooks/useDebounce";

import { SalePrice, Discount, ListPrice } from "common/pricing";
import PieceLabels from "common/labels/PieceLabels";
import ImageShopping from "common/image/ImageShopping";

import numberAsPrice from "lib/numberAsPrice";

import useShoppingConfig from "hooks/useShoppingConfig";
import useItemCart from "hooks/useItemCart";

import type { Sku } from "apollo/types/User";

const Link = styled.a`
  text-decoration: none;
  display: grid;
  grid-template-columns: max-content auto;
  color: inherit;
  grid-gap: 12px;
`;

const Picture = styled.picture`
  grid-row: 1/-1;
  max-width: 64px;
`;

const PieceListPriceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-row-gap: 4px;
`;

const PieceTitle = styled.div`
  font-size: 15px;
  line-height: 20px;
`;

const AcumulatorContainer = styled.div`
  display: flex;
  margin: 16px 0px 0px 75px;
`;

const Rectangle = styled.button`
  display: flex;
  width: 31px;
  height: 31px;
  border-radius: 15.5px;
  border: solid 1px #888888;
  background: none;
`;

const Icon = styled.span`
  margin: auto;
  font-size: 19px;
  letter-spacing: -0.71px;
  color: #888888;
`;

const Quantity = styled.span`
  font-size: 20px;
  margin: 3px 10px;
`;

interface Item {
  sku: Sku;
  quantity: number;
}

interface Props {
  item: Item;
}

export default function ProductLink({ item }: Props): JSX.Element {
  const {
    sku: {
      code,
      slug,
      stock: { labels },
      image,
      pricing: { listPrice, salePrice, discount },
      title,
    },
    quantity,
  } = item;

  const [counter, setCounter] = useState(quantity);

  const debouncedCounter = useDebounce(counter, 250);

  const addItem = useCallback(() => setCounter((e) => e + 1), []);

  const substractItem = useCallback(() => setCounter((e) => e - 1), []);

  const { shoppingURL, anchorComponent: AnchorComponent } = useShoppingConfig();

  const [increaseItem, decreaseUpdate] = useItemCart();

  useEffect(() => {
    if (debouncedCounter > quantity) {
      increaseItem(code, debouncedCounter);
    }
    if (debouncedCounter < quantity) {
      decreaseUpdate(code, debouncedCounter);
    }
  }, [debouncedCounter]);

  return (
    <div>
      <AnchorComponent
        href={shoppingURL(`/p/${slug}-${code}/`)}
        className="anchor-product"
        style={{
          textDecoration: "none",
          color: "inherit",
          gridGap: "16px",
          gridTemplateColumns: "max-content auto",
        }}
      >
        <Link as="span">
          <Picture>
            <ImageShopping
              format="f64"
              imageId={image}
              title={title}
              width="64"
            />
          </Picture>
          <ItemWrapper>
            <PieceTitle> {`${title}`} </PieceTitle>
            {discount > 0 && (
              <PieceListPriceWrapper>
                <ListPrice>{numberAsPrice(listPrice)}</ListPrice>
                <span style={{ height: 0, width: "4px" }} />
                {discount >= 5 && <Discount>{discount}</Discount>}
              </PieceListPriceWrapper>
            )}
            {salePrice && <SalePrice> {numberAsPrice(salePrice)} </SalePrice>}
            <PieceLabels labels={labels} />
          </ItemWrapper>
        </Link>
      </AnchorComponent>
      <AcumulatorContainer>
        <Rectangle onClick={substractItem}>
          {" "}
          <Icon>-</Icon>{" "}
        </Rectangle>
        <Quantity>{counter}</Quantity>
        <Rectangle onClick={addItem}>
          {" "}
          <Icon>+</Icon>{" "}
        </Rectangle>
      </AcumulatorContainer>
    </div>
  );
}
