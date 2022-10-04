import React from "react";
import styled from "styled-components";

import baseStyle from "common/baseStyle";

import type { FooterContext } from "hooks/useFooter";

import media from "lib/media";

import Phones from "./Phones";
import Nav from "./Nav";
import Newsletter from "./Newsletter";
import Social from "./Social";
import Copyright from "./Copyright";
import useShoppingConfig from "hooks/useShoppingConfig";

const FooterContainer = styled.div`
  box-sizing: content-box;
  background-color: #fff;
  border-top: 1px solid #dadada;
  padding-left: 15px;
  padding-right: 15px;
  ${media.greaterThan("xs")`
    padding-top: 60px;
  `}

  ${media.lessThan("xs")`
    padding-top: 30px;
  `}

  ${baseStyle}
`;

const StyledFooter = styled.footer`
  max-width: 1280px;
  margin: 0 auto;

  ${media.greaterThan("md")`
    padding: 0;
  `}
`;

const NavWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0;
  grid-gap: 12px;
  margin-bottom: 15px;

  ${media.greaterThan("sm")`
    grid-template-columns: 17% repeat(5, auto);
    margin-bottom: 0;
    grid-gap: 0;
    column-gap: 28px;
    padding-top: 12px;
  `}
`;

const LineSpace = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #dadada;
  grid-column-start: 1;
  grid-column-end: -1;
`;

const FirstSection = styled.div`
  width: 100%;
  display: grid;
  column-gap: 28px;
  grid-template-columns: 1fr;
  padding: 20px 0;

  ${media.greaterThan("xs")`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.greaterThan("sm")`
    grid-template-columns: 17% repeat(3, 1fr);
  `}

  ${media.greaterThan("md")`
    grid-template-columns: 17% repeat(5, auto);
  `}
`;

const Mobile = styled.div`
  display: block;
  ${media.greaterThan("sm")`
    display: none;
  `}
`;

interface FooterProps {
  context?: FooterContext;
}

const Footer: React.FC<FooterProps> = ({ context }: FooterProps) => {
  const { shoppingURL, anchorComponent: AnchorComponent } = useShoppingConfig();

  return (
    <FooterContainer>
      <StyledFooter>
        <FirstSection>
          <Social />
          <Phones />
          <Mobile>
            {context && (
              <AnchorComponent
                href={shoppingURL("/e/legales")}
                className="anchor-repentance"
                style={{
                  display: "block",
                  textDecoration: "none",
                  fontSize: "14px",
                  color: "#4a4a4a",
                  margin: "10px 0",
                }}
              >
                Información legal
              </AnchorComponent>
            )}
            {context === "home" && (
              <AnchorComponent
                href={shoppingURL("/mi-cuenta/mis-compras")}
                className="anchor-repentance"
                style={{
                  textDecoration: "none",
                  fontSize: "14px",
                  color: "#4a4a4a",
                  margin: "10px 0",
                }}
              >
                Botón de arrepentimiento
              </AnchorComponent>
            )}
            {context && (
              <AnchorComponent
                href={shoppingURL("/e/usuarios-financieros/")}
                className="anchor-repentance"
                style={{
                  display: "block",
                  textDecoration: "none",
                  fontSize: "14px",
                  color: "#4a4a4a",
                  margin: "10px 0",
                }}
              >
                Protección de Usuarios Financieros
              </AnchorComponent>
            )}
          </Mobile>
        </FirstSection>
        <LineSpace />
        <NavWrapper>
          <Newsletter data-test-id="footer-newsletter" />
          <Nav context={context} data-test-id="footer-nav-links" />
        </NavWrapper>
        <LineSpace />
        <Copyright />
      </StyledFooter>
    </FooterContainer>
  );
};

export default Footer;
