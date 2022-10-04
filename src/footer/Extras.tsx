import React from "react";
import styled from "styled-components";

import Svg from "common/Svg";

import useShoppingConfig from "hooks/useShoppingConfig";

import { fontSizeNormal, fontWeightBold } from "lib/theme";

const LinkPrimary = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  ${fontSizeNormal}
  ${fontWeightBold}
  color: #000;
  text-transform: uppercase;
  font-size: 14px;
`;

const FravegaTravel = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 142px;
  }
`;

const Logos = styled.div`
  margin-top: 20px;
  align-items: center;
  display: grid;
  grid-template-columns: auto auto;
`;

const CorporateSells = styled.div`
  margin-top: 20px;
`;

const Extras: React.FC = () => {
  const { shoppingURL } = useShoppingConfig();

  return (
    <div>
      <CorporateSells>
        <LinkPrimary href={shoppingURL("/corporativo")}>
          Ventas Corporativas
        </LinkPrimary>
      </CorporateSells>
      <Logos>
        <FravegaTravel>
          <LinkPrimary href="https://viajes.fravega.com/?utm_source=fravega.com&utm_medium=referral&utm_content=footer">
            <Svg src="/static/svg/fravega-travel.svg" />
          </LinkPrimary>
        </FravegaTravel>
      </Logos>
    </div>
  );
};

export default Extras;
