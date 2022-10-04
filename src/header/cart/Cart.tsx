import React from "react";
import { Cart as CartType } from "apollo/types/User";
import styled from "styled-components";
import { fontWeightBold } from "lib/theme";
import media from "lib/media";
import Svg from "common/Svg";

import { fontSizeNormalBig } from "lib/theme";

import ProductLink from "common/product-link/ProductLink";

import useShoppingConfig from "hooks/useShoppingConfig";

import IconTrash from "icons/IconTrash";

import Counter from "./Counter";

import OutlineButton from "common/outline-button/OutlineButton";

interface Props {
  cart: CartType;
  onRemoveItem: (sku: string) => unknown;
  onContinueBuying: () => unknown;
}

const Link = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 17px;
  ${fontWeightBold}
  color: #000000;

  svg {
    margin-left: 5px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  grid-gap: 10px;
  border-bottom: 1px solid #dadada;
  padding-bottom: 16px;

  ${media.greaterThan("sm")`
    min-width: 360px;
    padding-bottom: 15px;
  `}
`;

const Ul = styled.ul`
  padding: 0;
  max-height: 70vh;
  overflow: auto;
  margin: 0;
`;

const Li = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-gap: 10px;
  padding: 24px 0px;

  &:not(:last-of-type) {
    border-bottom: 1px solid #dadada;
  }
`;

const BlueLink = styled(Link)`
  color: #006afd;
  text-decoration: none;
`;

const StyledIconTrash = styled(IconTrash)`
  fill: #006afd;
  width: 14px;
  cursor: pointer;
`;

const Button = styled.button`
  display: flex;
  align-items: start;

  padding: 0;
  margin-right: 6px;
  border: 0;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

const CartWrapper = styled.div`
  display: grid;
  overflow: hidden;
`;

const NavTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  margin: 0;
`;

const EmptyCartWrapper = styled.div`
  padding: 0.5em;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr auto;
  grid-gap: 1em;
  line-height: 20px;
  padding: 24px 0px;
`;

const Title = styled.p`
  ${fontWeightBold}
  color: #d68227;
  ${fontSizeNormalBig}
  margin: 0;
`;

const Content = styled.p`
  font-size: 15px;
  margin: 0;
`;

const StyledOutlineCart = styled(Svg)`
  fill: #d68227;
  color: #d68227;
  align-self: center;
`;

const IconCartCounter = styled.div`
  ${media.greaterThan("sm")`
    display: none;
  `}
`;

const StyledCounter = styled(Counter)`
  position: absolute;
  top: 15px;
  left: 33px;
`;

export default function Cart({
  cart,
  onRemoveItem,
  onContinueBuying,
}: Props): JSX.Element {
  const { shoppingURL } = useShoppingConfig();

  const productsInCart = cart?.items.length;

  return (
    <CartWrapper onMouseDown={(e) => e.preventDefault()}>
      {cart?.items.length > 0 ? (
        <>
          <NavContainer>
            <IconCartCounter>
              <Svg src="/static/svg/icon-shopping-cart.svg" alt={"cart"} />
              <StyledCounter>{productsInCart}</StyledCounter>
            </IconCartCounter>
            <BlueLink
              data-test-id="link-go-to-cart"
              href={
                window.location.host.includes("development")
                  ? "https://valkiriaqa.vtexcommercestable.com.br/checkout/#/cart"
                  : shoppingURL("/checkout/#/cart")
              }
            >
              Ir a mi carrito
            </BlueLink>
          </NavContainer>
          <Ul>
            {cart?.items.map((item) => (
              <Li key={item.sku.code}>
                <ProductLink item={item} />
                <Button onClick={() => onRemoveItem(item.sku.code)}>
                  <StyledIconTrash />
                </Button>
              </Li>
            ))}
          </Ul>
        </>
      ) : (
        <>
          <NavContainer>
            <NavTitle> Mi carrito </NavTitle>
          </NavContainer>
          <EmptyCartWrapper>
            <StyledOutlineCart
              src="/static/svg/icon-outline-cart.svg"
              alt={"Carrito"}
            />
            <div>
              <Title> Tu carrito está vacío </Title>
              <Content>
                {" "}
                Descubrí las categorías del sitio y elegí los mejores productos.
              </Content>
            </div>
            <div style={{ gridColumn: "2" }}>
              <OutlineButton onClick={onContinueBuying}>
                SEGUÍ COMPRANDO
              </OutlineButton>
            </div>
          </EmptyCartWrapper>
        </>
      )}
    </CartWrapper>
  );
}
