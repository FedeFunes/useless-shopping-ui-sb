import React, { useState } from "react";
import styled from "styled-components";

import Svg from "common/Svg";
import ModalTooltipResponsive, {
  tooltipClosed,
  tooltipOpen,
  ModalTooltipResponsiveArrow,
} from "common/ModalTooltipResponsive";

import useUserCart from "hooks/useUserCart";

import media from "lib/media";
import { fontSizeSmall } from "lib/theme";

import Cart from "./Cart";
import Counter from "./Counter";

const CloseIcon = styled(Svg).attrs({
  src: "/static/svg/close.svg",
})`
  width: 1.2em;
  color: #4a4a4a;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
`;

const CartButton = styled.button`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.2em;
  align-items: center;
  position: relative;

  color: #4a4a4a;
  white-space: nowrap;
  ${fontSizeSmall}

  font-family: "Work Sans", sans-serif;

  padding: 0;
  margin: 0;
  border: 0;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

const CartWrapper = styled.div`
  display: inline-block;
  ${media.greaterThan("sm")`
    position: relative;

  `}

  ${tooltipClosed}
  &[data-tooltip-open="true"] {
    ${tooltipOpen}
  }
`;

const StyledCounter = styled(Counter)`
  position: absolute;
  top: 0px;
  left: 16px;
`;

const StyledModalTooltipResponsive = styled(ModalTooltipResponsive)`
  ${media.greaterThan("sm")`
    border-radius: 0.25em;
    margin: 1em 0;
    `};

  ${ModalTooltipResponsiveArrow} {
    top: 0;
    right: 3px;
  }

  @media (min-width: 1400px) {
    margin: 1em -3em;
    ${ModalTooltipResponsiveArrow} {
      top: 0;
      right: 52px;
    }
  }
`;

interface Props {
  style?: React.CSSProperties;
}

export default function UserCart({ ...props }: Props): JSX.Element {
  const [cart, { removeItem }] = useUserCart();

  const [isOpen, setOpen] = useState(false);
  const [listenClick, setListenClick] = useState(true);

  const handleClickButton = () => {
    if (listenClick) {
      setOpen(true);
      setListenClick(false);
    }
  };

  const closeTooltip = () => {
    setOpen(false);
    setTimeout(() => setListenClick(true), 500); // Beatiful fix to prevent automatic close when tooltip focus out
  };

  return (
    <>
      <CartWrapper data-tooltip-open={isOpen} {...props}>
        <CartButton onClick={handleClickButton} data-test-id="button-cart">
          <Svg src="/static/svg/icon-shopping-cart.svg" alt={"cart"} />
          {cart?.items.length > 0 && (
            <StyledCounter>{cart.items.length}</StyledCounter>
          )}
        </CartButton>
        <StyledModalTooltipResponsive
          position="bottom-right"
          padding="16px 16px 0px"
          backgroundColor="#ffffff"
          closeModal={closeTooltip}
          isOpen={isOpen}
        >
          <Cart
            cart={cart}
            onRemoveItem={removeItem}
            onContinueBuying={closeTooltip}
          />
          <CloseButton onClick={closeTooltip}>
            <CloseIcon />
          </CloseButton>
        </StyledModalTooltipResponsive>
      </CartWrapper>
    </>
  );
}
