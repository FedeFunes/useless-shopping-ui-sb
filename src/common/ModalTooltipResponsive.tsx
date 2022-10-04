import React, { forwardRef, useRef, useEffect } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import media from "lib/media";

type TooltipPosition =
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "top-left"
  | "top-right";

function tooltipPosition({
  theme: {
    tooltip: { position },
  },
}) {
  switch (position) {
    case "top-left":
      return "bottom: 100%; left: 0; transform-origin: 10% 90%;";
    case "top-right":
      return "bottom: 100%; right: 0; transform-origin: 90% 90%;";
    case "bottom-right":
      return "top: 100%; right: 0; transform-origin: 90% 10%;";
    case "bottom-center":
      return "top: 100%; right: -20px; transform-origin: 60% 10%;";
    case "bottom-left":
    default:
      return "top: 100%; left: 0; transform-origin: 10% 10%;";
  }
}

function tooltipArrowPosition({
  theme: {
    tooltip: { position },
  },
}) {
  switch (position) {
    case "top-left":
      return "transform: scaleY(-1); bottom: 0; left: 3px;";
    case "top-right":
      return "transform: scaleY(-1); bottom: 0; right: 3px;";
    case "bottom-right":
      return "top: 0; right: 3px;";
    case "bottom-center":
      return "top: 0; right: 80px;";
    case "bottom-left":
    default:
      return "top: 0; left: 3px;";
  }
}

const ModalTooltipResponsiveInnerWrapper = styled.div`
  border-radius: 0 0 0.25em 0.25em;
  position: relative;
  color: ${({ theme }) => theme.tooltip.color};
  background-color: ${({ theme }) => theme.tooltip.backgroundColor};
  box-shadow: rgba(136, 136, 136, 0.8) 0px 3px 6px 0px;
  padding: ${({ theme }) => theme.tooltip.padding};

  &:focus {
    outline: 0px solid transparent;
  }
`;

const ModalTooltipResponsiveWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;

  height: 100vh;
  background: rgba(0, 0, 0, 0.75);

  ${media.greaterThan("sm")`
    top: unset;
    left: unset;
    width: unset;
    background: unset;
    ${tooltipPosition}
  
  `}

  will-change: transform;
  transform: none;
  transition-delay: 0s, 150ms;
  transition-duration: 0.2s, 0.133s;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),
    cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
`;

export const tooltipClosed = css`
  ${ModalTooltipResponsiveWrapper} {
    transform: scale(0, 0);
    opacity: 0;
  }
`;

export const tooltipOpen = css`
  ${ModalTooltipResponsiveWrapper} {
    transform: scale(1, 1);
    opacity: 1;
  }
`;

export const ModalTooltipResponsiveArrow = styled.div`
  ${media.greaterThan("sm")`
    ${tooltipArrowPosition}
    height: 12.7656px;
    width: 18px;
    margin: -12.78px 0.25em;
    position: absolute;

    ::before {
      background-color: ${({ theme }) => theme.tooltip.backgroundColor};
      box-shadow: rgba(0, 0, 0, 0.1) 0px -1px 0px 0px,
      rgba(0, 0, 0, 0.14) 0px 0px 0px 0px;
      content: "";
      display: block;
      height: 12.7656px;
      width: 12.7656px;
      transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0);
      transform-origin: 0px 12.7656px;
    }
  `}
`;

interface Props {
  className?: string;
  isOpen: boolean;
  style?: React.CSSProperties;
  backgroundColor?: string;
  color?: string;
  padding?: string;
  position?: TooltipPosition;
  children: React.ReactNode;
  closeModal?: () => unknown;
}

export default forwardRef(function ModalTooltipResponsive(
  {
    children,
    padding = "0",
    position = "bottom-left",
    color = "black",
    backgroundColor = "#eff7f2",
    closeModal = () => "",
    isOpen,
    ...props
  }: Props,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element {
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (isOpen) tooltipRef.current.focus();
  }, [isOpen]);

  return (
    <ThemeProvider
      theme={(prevTheme) => ({
        ...prevTheme,
        tooltip: { color, backgroundColor, position, padding },
      })}
    >
      <ModalTooltipResponsiveWrapper {...props} ref={ref} onClick={closeModal}>
        <ModalTooltipResponsiveInnerWrapper
          onClick={(e) => e.stopPropagation()}
          tabIndex={1}
          onBlur={closeModal}
          ref={tooltipRef}
        >
          {children}
          <ModalTooltipResponsiveArrow />
        </ModalTooltipResponsiveInnerWrapper>
      </ModalTooltipResponsiveWrapper>
    </ThemeProvider>
  );
});
