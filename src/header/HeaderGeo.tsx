import React, { forwardRef, useCallback, useRef } from "react";
import styled from "styled-components";

import Svg from "common/Svg";
import Tooltip, { tooltipClosed, tooltipOpen } from "common/Tooltip";
import Modal from "newModal/Modal";

import useShoppingDefaultGeoLocation from "hooks/useShoppingDefaultGeoLocation";
import useShoppingGeoLocation from "hooks/useShoppingGeoLocation";
import useGeoModal from "hooks/useGeoModal";
import useGeoTooltip from "hooks/useGeoTooltip";

import media from "lib/media";
import GeoModal from "header/GeoModal";
import useTracking from "hooks/useTracking";

interface HeaderGeoProps {
  style?: React.CSSProperties;
  className?: string;
  context?: string;
}

const GeoParagraph = styled.p`
  margin: 0;
  font-size: 0.8125em;
  font-family: "Work Sans", sans-serif;
  display: flex;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;

  ${media.greaterThan("sm")`
    font-size: 0.875em;
  `}
`;

const GeoButton = styled.button`
  display: flex;
  align-items: center;
  max-width: 100%;

  & > * + * {
    margin-inline-start: 3px;
  }

  font-size: inherit;
  padding: 0;
  margin: 0;
  border: 0;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;

  :active {
    color: inherit;
  }
`;

const GeoRegion = styled.b`
  font-family: "Work Sans", sans-serif;
  font-weight: inherit;
  color: #006afd;
`;

const EllipsisGeoRegion = styled(GeoRegion)`
  display: inline-block;
  margin: 0 0.3em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const GeoWrapper = styled.div`
  ${media.greaterThan("sm")`
    position: relative;
  `}

  ${tooltipClosed}
  &[data-tooltip-open="true"] {
    ${tooltipOpen}
  }
`;

const StyledModal = styled(Modal)`
  border: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.27);
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0;
`;

const GeoTooltip = styled(Tooltip)`
  ${media.lessThan("sm")`
    left: 0;
    right: 0;
  `}
`;

export default forwardRef(function HeaderGeo(
  { context, style, className }: HeaderGeoProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element {
  const [postalCode] = useShoppingGeoLocation();
  const [defaultPostalCode] = useShoppingDefaultGeoLocation();
  const isFirstOpen = useRef(true);
  const { isOpen, setOpen } = useGeoModal();
  const { isOpen: isGeoTooltipOpen, open: openGeoTooltip } = useGeoTooltip();

  const [trackEvent] = useTracking();

  const closeModal = useCallback(() => {
    trackEvent("fvg.header.click-close-modal-cp", { context });
    if (isFirstOpen.current) {
      openGeoTooltip();
    }
    isFirstOpen.current = false;
    setOpen(false);
  }, [openGeoTooltip]);

  const openModal = useCallback(() => {
    trackEvent("fvg.header.click-open-modal-cp", { context });
    setOpen(true);
  }, [trackEvent, context]);

  const onSubmit = useCallback(() => {
    openGeoTooltip();
    isFirstOpen.current = false;
    setOpen(false);
  }, []);

  return (
    <GeoWrapper
      style={style}
      className={className}
      data-tooltip-open={isGeoTooltipOpen}
      ref={ref}
    >
      <GeoButton
        type="button"
        onClick={openModal}
        title={postalCode?.region}
        data-test-id="geo-sticky"
      >
        <Svg
          src="/static/svg/icon-marker.svg"
          alt="marker"
          style={{ height: "1em", flexShrink: 0, fill: "#4a4a4a" }}
        />

        {!defaultPostalCode && !postalCode && (
          <GeoParagraph>
            <GeoRegion>Ingresá tu código postal</GeoRegion>
          </GeoParagraph>
        )}

        {!!defaultPostalCode && !postalCode && (
          <GeoParagraph>
            {"Estás en "}
            <EllipsisGeoRegion>{defaultPostalCode.region}</EllipsisGeoRegion>
          </GeoParagraph>
        )}

        {!!postalCode && (
          <GeoParagraph>
            {"Estás en "}
            <EllipsisGeoRegion>{postalCode.region}</EllipsisGeoRegion>{" "}
            <GeoRegion>({postalCode.number})</GeoRegion>
          </GeoParagraph>
        )}
      </GeoButton>

      {!postalCode && (
        <GeoTooltip color="#208041" backgroundColor="#eff7f2">
          Te ubicamos en <b>{defaultPostalCode?.region}</b>. <br /> Ingresá tu
          código postal para ver las mejores opciones de envío y retiro.
        </GeoTooltip>
      )}

      {postalCode && (
        <GeoTooltip color="#208041" backgroundColor="#eff7f2">
          Estás viendo las mejores opciones de envío y retiro para tu ubicación.
        </GeoTooltip>
      )}

      <StyledModal
        open={isOpen}
        onClose={closeModal}
        data-test-id="modal-wrapper"
      >
        <GeoModal onSubmit={onSubmit} context={context} />
      </StyledModal>
    </GeoWrapper>
  );
});
