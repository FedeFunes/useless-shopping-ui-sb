import React from "react";
import styled from "styled-components";

import useShoppingConfig from "hooks/useShoppingConfig";

import media from "lib/media";
import {
  fontSizeSmaller,
  fontSizeSmall,
  fontSizeNormal,
  fontSizeBig,
  fontWeightNormal,
  fontWeightBold,
} from "lib/theme";

const RegularText = styled.span`
  ${fontSizeSmaller}
  ${fontWeightNormal}
  line-height: 1.4;
  color: #4a4a4a;
  display: block;

  ${media.greaterThan("sm")`
    display: flex;
  `}
`;

const PhoneInfo = styled.div`
  text-align: left;
  margin: 10px 0;

  ${media.greaterThan("xs")`
    width: 100%;
  `}

  ${media.greaterThan("sm")`
    margin-top: 0;
    margin-right: 0px;
    width: auto;
    margin: 0;
  `}
`;

const CorpInfo = styled.div`
  ${media.greaterThan("sm")`
    grid-column: 2;
  `}
  ${media.greaterThan("md")`
    grid-column: unset;
  `}
`;

const Link = styled.a`
  display: flex;
  ${fontSizeBig}
  line-height: 1;
  text-decoration: none;
  color: black;
  white-space: nowrap;
  ${fontWeightBold}
  font-size: 15px;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 15px;
  line-height: 1.44;
  letter-spacing: -0.5px;
  color: #000000;
  display: flex;
  ${fontWeightNormal}
  line-height: 1;
  margin-bottom: 5px;
  margin-top: 0px;
  margin-right: 5px;

  ${media.lessThan("md")`
    ${fontSizeSmall}
  `}
`;

const LinkTitle = styled.a`
  font-size: 15px;
  line-height: 1.44;
  letter-spacing: -0.5px;
  color: #000000;
  display: flex;
  ${fontWeightNormal}
  line-height: 1;
  margin-bottom: 5px;
  margin-top: 0px;
  margin-right: 5px;
  cursor: pointer;
`;

const MailLink = styled.span`
  display: flex;
  ${fontSizeNormal}
  line-height: 1;
  font-weight: 600;
  text-decoration: none;
  color: black;
  white-space: nowrap;
`;

const PhoneLink = styled.a`
  display: flex;
  ${fontSizeBig}
  line-height: 1;
  font-weight: 600;
  text-decoration: none;
  color: black;
  white-space: nowrap;

  ${media.lessThan("md")`
    ${fontSizeNormal}
  `}

  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 5px;

  ${media.greaterThan("sm")`
    flex-direction: column;
  `}
`;

const CustomPhoneInfo = styled(PhoneInfo)`
  width: 100%;
`;

const Phone: React.FC = () => {
  const { shoppingURL, footerAttencionService } = useShoppingConfig();

  return (
    <>
      <CustomPhoneInfo data-test-id="footer-phone">
        <PhoneWrapper>
          <Title>Atención al cliente: </Title>
          <div>
            <PhoneLink href="tel:08001220338">0800 122 0338</PhoneLink>
          </div>
          <div>
            <PhoneLink href="tel:08109993728">0810 999 3728</PhoneLink>
          </div>
        </PhoneWrapper>
        <RegularText>LU-VI de 09:00 a 18:00</RegularText>
        <RegularText>SA de 9:00 a 13:00</RegularText>
      </CustomPhoneInfo>

      <PhoneInfo data-test-id="footer-phone">
        <PhoneWrapper>
          <Title>Cobranza de créditos:</Title>
          <MailLink>cobranzas@fravega.com.ar </MailLink>
        </PhoneWrapper>
      </PhoneInfo>

      <PhoneInfo data-test-id="footer-phone">
        <PhoneWrapper>
          <Title>Venta telefónica: </Title>
          <PhoneLink href="tel:08103338700">0810 333 8700</PhoneLink>
        </PhoneWrapper>
        {footerAttencionService ? (
          footerAttencionService
            .split("\n")
            .map((string) => <RegularText key={string}> {string} </RegularText>)
        ) : (
          <>
            <RegularText>LU-VI de 8:00 a 20:00</RegularText>
            <RegularText>SA-DO-Feriados 9:00 a 21:00</RegularText>
          </>
        )}
      </PhoneInfo>

      <CorpInfo>
        <PhoneWrapper>
          <LinkTitle> Servicios a empresas: </LinkTitle>
          <Link href={shoppingURL("/corporativo")}> Ventas corporativas </Link>
        </PhoneWrapper>
      </CorpInfo>
    </>
  );
};

export default Phone;
