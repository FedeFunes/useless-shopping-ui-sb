import React, { useState } from "react";
import styled from "styled-components";

import Svg from "common/Svg";
import ModalTooltipResponsive, {
  tooltipClosed,
  tooltipOpen,
} from "common/ModalTooltipResponsive";

import useUserProperties from "hooks/useUserProperties";
import useShoppingConfig from "hooks/useShoppingConfig";

import media from "lib/media";
import {
  fontSizeSmallest,
  fontSizeSmall,
  fontSizeNormal,
  fontSizeBig,
} from "lib/theme";

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

const OnlyMobile = styled.div`
  display: block;
  ${media.greaterThan("sm")`
    display: none;
  `}
`;

const TooltipWrapper = styled.div`
  margin: 0 18px;

  ${media.greaterThan("sm")`
    margin: 0;
  `}
`;

const OptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 5px;
  margin: 10px 0;

  ${media.greaterThan("sm")`
    display: block;
    min-width: 100px;
    margin: 0;
  `}
`;

const UserIconWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;

  ${tooltipClosed}
  &[data-tooltip-open="true"] {
    ${tooltipOpen}
  }

  ${media.greaterThan("sm")`
    position: relative;
  `}
`;

const Line = styled.div`
  margin: 0;
  border: solid 1px #dadada;
`;

const Title = styled.p`
  margin: 5px 0 18px 0;
  letter-spacing: -0.3px;
  ${fontSizeBig}
  font-weight: 600;
`;

const Span = styled.span`
  ${fontSizeNormal}
  font-weight: normal;
  letter-spacing: -0.4px;
  color: #4a4a4a;
  margin-left: 5px;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #000000;
  white-space: nowrap;
`;

const Hola = styled.div`
  ${fontSizeSmallest}
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.38px;
`;

const Nombre = styled.div`
  ${fontSizeSmall}
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.44px;
`;

const TooltipContent = styled.div`
  ${fontSizeBig}
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.44px;
  color: #000000;
  padding: 10px 0;

  ${media.greaterThan("sm")`
    ${fontSizeSmall}
    padding: 5px 50px 5px 15px;

    &:hover {
      background-color: #006afd;
    }
  `}
`;

const ProfileWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
  grid-gap: 5px;
`;

interface Props {
  style?: React.CSSProperties;
}

export default function UserIcon({ ...props }: Props): JSX.Element {
  const { shoppingURL } = useShoppingConfig();
  const user = useUserProperties();

  const [isOpen, setOpen] = useState(false);
  const [listenClick, setListenClick] = useState(true);

  const handleClickButton = () => {
    if (listenClick && user) {
      setOpen(true);
      setListenClick(false);
    }
  };

  const closeTooltip = () => {
    setOpen(false);
    setTimeout(() => setListenClick(true), 500); // Beatiful fix to prevent automatic close when tooltip focus out
  };

  return (
    <UserIconWrapper {...props} data-tooltip-open={isOpen}>
      <>
        <div onClick={handleClickButton}>
          {user ? (
            <ProfileWrapper>
              <Svg
                src="/static/svg/user.svg"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  alignSelf: "center",
                  color: "#4a4a4a",
                  height: "25px",
                }}
              />
              <Span>
                {user && !user.profile && <Span>Bienvenido</Span>}
                {user && user.profile && (
                  <>
                    <Hola>Hola</Hola>
                    <Nombre>{user.profile.firstName}</Nombre>
                  </>
                )}
              </Span>
            </ProfileWrapper>
          ) : (
            <Anchor
              href={shoppingURL("/mi-cuenta")}
              data-test-id="my-account"
              style={{ fontSize: "14px", color: "#4a4a4a" }}
            >
              <ProfileWrapper>
                <Svg
                  src="/static/svg/user.svg"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    alignSelf: "center",
                    color: "#4a4a4a",
                    height: "25px",
                  }}
                />
                Mi cuenta
              </ProfileWrapper>
            </Anchor>
          )}
        </div>
        <ModalTooltipResponsive
          position="bottom-center"
          backgroundColor="#ffffff"
          padding="15px 0 13px 0"
          closeModal={closeTooltip}
          isOpen={isOpen}
        >
          <TooltipWrapper>
            <OnlyMobile>
              <Title> Mi cuenta </Title>
              <Line />
              <CloseButton onClick={closeTooltip}>
                <CloseIcon />
              </CloseButton>
            </OnlyMobile>

            <OptionsWrapper>
              <OnlyMobile>
                <Svg
                  src="/static/svg/user.svg"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: "8px",
                    color: "#4a4a4a",
                    height: "25px",
                  }}
                />
              </OnlyMobile>
              <div>
                <OnlyMobile>
                  <TooltipContent>
                    {user && !user.profile && <Span>Bienvenido</Span>}
                    {user && user.profile && (
                      <>Hola {user && user.profile.firstName}</>
                    )}
                  </TooltipContent>
                </OnlyMobile>

                <Anchor href={shoppingURL("/mi-cuenta/datos")}>
                  <TooltipContent>Mis datos</TooltipContent>
                </Anchor>
                <Anchor href={shoppingURL("/mi-cuenta/mis-compras")}>
                  <TooltipContent>Mis compras</TooltipContent>
                </Anchor>
                <Anchor href={shoppingURL("/mi-cuenta/creditos")}>
                  <TooltipContent>Mis créditos</TooltipContent>
                </Anchor>
              </div>
            </OptionsWrapper>
          </TooltipWrapper>
        </ModalTooltipResponsive>
      </>
    </UserIconWrapper>
  );
}
