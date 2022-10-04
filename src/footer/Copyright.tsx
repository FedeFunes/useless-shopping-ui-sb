import React from "react";
import styled from "styled-components";

import media from "lib/media";
import { fontSizeSmaller } from "lib/theme";

const Copyright = styled.p`
  ${fontSizeSmaller}
  color: #4a4a4a;
  margin-bottom: 40px;
`;

const DesktopSpan = styled.span`
  display: none;
  ${media.greaterThan("sm")`
    display: inline;
  `}
`;

const Disclaimer = styled.p`
  display: none;
  ${media.greaterThan("sm")`
    display: block;
  `}

  font-size: 11px;
  line-height: 1.33;
  letter-spacing: -0.2px;
  color: #888888;
`;

const Logos = styled.div`
  display: none;
  ${media.greaterThan("md")`
    display: flex;
  `}

  align-items: center;
  justify-content: flex-end;

  & > * + * {
    margin-left: 32px;
  }
`;

const Wrapper = styled.div`
  margin-top: 0;
  margin-bottom: 10px;

  display: grid;
  grid-gap: 32px;
  grid-template-columns: 70fr;
  grid-auto-columns: 30fr;
  grid-auto-flow: column;

  ${media.greaterThan("sm")`
    margin: 10px 0;
  `}
`;

export default function CopyrightFooter() {
  return (
    <Wrapper data-test-id="footer-copyright">
      <div>
        <Copyright>
          Copyright 2021 | Todos los derechos reservados Fravega.com.{" "}
          <DesktopSpan>
            Frávega S.A.C.I. e I. Valentín Gómez 2813 (1191) | Capital Federal |
            Argentina
          </DesktopSpan>
        </Copyright>
        <Disclaimer>
          Las fotos son a modo ilustrativo. La venta de cualquiera de los
          productos publicados está sujeta a la verificación de stock. Los
          precios online y los planes de financiación para los productos
          presentados/publicados en www.fravega.com.ar y/o www.fravega.com son
          válidos exclusivamente para la compra vía internet en las páginas
          antes mencionadas. Las especificaciones técnicas y descripciones están
          sujetas a cambios sin previo aviso.
        </Disclaimer>
      </div>
      <Logos>
        <span>
          <picture>
            <source
              srcSet="https://images.fravega.com/f300/80714e1aa94895bafc05cc8e4d1cf243.png.webp"
              type="image/webp"
            />
            <img
              src="https://images.fravega.com/f300/80714e1aa94895bafc05cc8e4d1cf243.png"
              alt="Ganadores ecommerce 2022"
              width="64"
              height="61.32"
            />
          </picture>
        </span>
        <a
          target="blank"
          href="https://www.econfianza.org/ar/?c=minisitio&s=191"
        >
          <picture>
            <source
              srcSet="https://images.fravega.com/f300/84e015d55939d4f5961bf5dcb4989d78.png.webp"
              type="image/webp"
            />
            <img
              src="https://images.fravega.com/f300/84e015d55939d4f5961bf5dcb4989d78.png"
              alt="Logo CAECE"
              width="125"
              height="41.66"
            />
          </picture>
        </a>
        <a
          target="blanck"
          href="https://servicios1.afip.gov.ar/clavefiscal/qr/mobilePublicInfo.aspx?req=e1ttZXRob2Q9Z2V0UHVibGljSW5mb11bcGVyc29uYT0zMDUyNjg3NDI0OV1bdGlwb2RvbWljaWxpbz0wXVtzZWN1ZW5jaWE9MF1bdXJsPWh0dHA6Ly93d3cuZnJhdmVnYS5jb21dfQ=="
        >
          <picture>
            <source
              srcSet="https://images.fravega.com/f300/32cbb64340160607a44b6b5c35688bd6.png.webp"
              type="image/webp"
            />
            <img
              src="https://images.fravega.com/f300/32cbb64340160607a44b6b5c35688bd6.png"
              alt="Data fiscal"
              width="40"
              height="54.79"
            />
          </picture>
        </a>
      </Logos>
    </Wrapper>
  );
}
