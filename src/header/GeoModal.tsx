import React, { useRef, useCallback } from "react";
import styled from "styled-components";
import media from "lib/media";
import Svg from "common/Svg";

import GeoForm from "header/geo-form/GeoForm";
import useShoppingGeoLocation from "hooks/useShoppingGeoLocation";
import { fontSizeNormal, fontFamilyGlobal, fontWeightBold } from "lib/theme";

const Label = styled.p`
  margin: 0;
  background-color: #eff7f2;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #208041;
  display: flex;
  padding: 2px 4px;
  width: max-content;
`;

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 5px;
  align-items: center;
  margin: auto;
  justify-items: center;
`;

const IconText = styled.span`
  height: 14px;
  margin: 4px 0 3px;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #208041;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  box-sizing: content-box;
  padding: 48px 24px 24px;
  width: 280px;
  ${media.greaterThan("sm")`
    width: 280px;
    padding: 48px 32px 32px;
  `}
`;

const Title = styled.div`
  ${fontSizeNormal}
  ${fontFamilyGlobal}
  ${fontWeightBold}
  text-align: start;
  color: #000000;
`;

const Subtitle = styled.p`
  ${fontFamilyGlobal}
  ${fontSizeNormal}
  text-align: start;
  color: #000000;
  line-height: 1.375em;
  margin: 2px 0px 0px;
`;

interface Props {
  onSubmit: () => unknown;
  context?: string;
}

export default function GeoModal({ onSubmit, context }: Props): JSX.Element {
  const [postalCode, setGeoLocation] = useShoppingGeoLocation();

  const inputRef = useRef<HTMLInputElement>();

  const handleSubmit = useCallback(
    (geoLocation, { reset }) => {
      setGeoLocation(geoLocation);
      onSubmit();
      reset();
    },
    [setGeoLocation],
  );

  return (
    <Wrapper data-test-id="geo-modal-wrapper">
      {postalCode ? (
        <div>
          <Title>
            {" "}
            Estás en {postalCode.region} ({postalCode.number}).{" "}
          </Title>
          <Subtitle>
            Cambiá el código postal para ver las mejores opciones de envío y
            retiro de otra ubicación.
          </Subtitle>
        </div>
      ) : (
        <div>
          <Title>Ingresá tu código postal </Title>
          <Subtitle>
            {" "}
            para ver las mejores opciones de envío y retiro.{" "}
          </Subtitle>
        </div>
      )}

      <GeoForm
        inputRef={inputRef}
        isGeoLocated={!!postalCode}
        onSubmit={handleSubmit}
        context={context}
      />

      <IconWrapper>
        <Svg
          style={{ color: "#208041", height: "36px", width: "36px" }}
          src="/static/svg/icon-box.svg"
          alt={"envío-gratis"}
        />
        <Svg
          style={{ color: "#208041", height: "46px", width: "46px" }}
          src="/static/svg/icon-fast-truck-large.svg"
          alt={"envío"}
        />
        <Svg
          style={{ color: "#208041", height: "36px", width: "36px" }}
          src="/static/svg/icon-office.svg"
          alt={"retiro"}
        />

        <Label>
          <IconText>Envio gratis </IconText>
        </Label>

        <Label>
          <IconText>Llega mañana </IconText>
        </Label>

        <Label>
          <IconText>Retiralo YA </IconText>
        </Label>
      </IconWrapper>
    </Wrapper>
  );
}
