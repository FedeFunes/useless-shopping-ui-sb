import React, { forwardRef } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import media from "lib/media";

type TooltipPosition =
  | "bottom-left"
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
      return "transform: scaleY(-1); bottom: 0; left: 1em;";
    case "top-right":
      return "transform: scaleY(-1); bottom: 0; right: 1em;";
    case "bottom-right":
      return "top: 0; right: 1em;";
    case "bottom-left":
    default:
      return "top: 0; left: 5.5em;";
  }
}

const TooltipWrapper = styled.div`
  position: absolute;
  ${tooltipPosition}

  will-change: transform;
  transform: none;
  transition-delay: 0s, 150ms;
  transition-duration: 0.2s, 0.133s;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),
    cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 500;
`;

export const tooltipClosed = css`
  ${TooltipWrapper} {
    transform: scale(0, 0);
    opacity: 0;
  }
`;

export const tooltipOpen = css`
  ${TooltipWrapper} {
    transform: scale(1, 1);
    opacity: 1;
  }
`;

const TooltipInnerWrapper = styled.div`
  color: ${({ theme }) => theme.tooltip.color};
  background-color: ${({ theme }) => theme.tooltip.backgroundColor};
  margin: 0;
  padding: ${({ theme }) => theme.tooltip.padding};
  box-shadow: 0 -1px 5px 0 rgb(0 0 0 / 20%);
  font-size: 15px;
  font-family: Arial;
  line-height: 1.33;

  ${media.greaterThan("sm")`
    box-shadow: rgba(136, 136, 136, 0.8) 0px 3px 6px 0px;
    border-radius: 0.25em;
    position: relative;
    width: 336px;
    margin: 1em 0;
  `}
`;

const TooltipArrow = styled.div`
  ${tooltipArrowPosition}
  height: 12.7656px;
  width: 18px;
  margin: -12.78px 0.25em;
  overflow: hidden;
  position: absolute;

  ::before {
    background-color: ${({ theme }) => theme.tooltip.backgroundColor};
    box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 1px -1px,
      rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    content: "";
    display: block;
    height: 12.7656px;
    width: 12.7656px;
    transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0);
    transform-origin: 0px 12.7656px;
  }
`;

interface Props {
  className?: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
  color?: string;
  padding?: string;
  position?: TooltipPosition;
  children: React.ReactNode;
}

export default forwardRef(function Tooltip(
  {
    children,
    padding = "1em 1em 1em 1em",
    position = "bottom-left",
    color = "black",
    backgroundColor = "#eff7f2",
    ...props
  }: Props,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element {
  return (
    <ThemeProvider
      theme={(prevTheme) => ({
        ...prevTheme,
        tooltip: { color, backgroundColor, position, padding },
      })}
    >
      <TooltipWrapper {...props} ref={ref}>
        <TooltipInnerWrapper>
          {children}
          <TooltipArrow />
        </TooltipInnerWrapper>
      </TooltipWrapper>
    </ThemeProvider>
  );
});
