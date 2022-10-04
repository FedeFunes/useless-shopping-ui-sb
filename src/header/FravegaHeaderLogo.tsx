import React, { forwardRef } from "react";
import styled from "styled-components";

import Svg from "common/Svg";

import useShoppingConfig from "hooks/useShoppingConfig";

import media from "lib/media";

const FvgSvgDesktop = styled(Svg).attrs({
  src: "/static/svg/fravega-logo.svg",
})`
  height: 1.5em;

  display: none;
  ${media.greaterThan("sm")`
    display: unset;
  `}
`;

const FvgSvgMobile = styled(Svg).attrs({ src: "/static/svg/fravega-icon.svg" })`
  height: 1.5em;

  ${media.greaterThan("sm")`
    display: none;
  `}
`;

export default forwardRef(function FravegaHeaderLogo(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
  ref: React.Ref<HTMLAnchorElement>,
): JSX.Element {
  const { shoppingURL, anchorComponent: AnchorComponent } = useShoppingConfig();

  return (
    <AnchorComponent href={shoppingURL()} className="anchor-logo">
      <span {...props} ref={ref}>
        <FvgSvgDesktop />
        <FvgSvgMobile />
      </span>
    </AnchorComponent>
  );
});
