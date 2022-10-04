import { createGlobalStyle } from "styled-components";
import media from "lib/media";

export const DisableBodyScroll = createGlobalStyle`
body {
  overflow: hidden;
}
`;

export const DisableBodyScrollMobile = createGlobalStyle`
    body {
      overflow: hidden;
    }
  ${media.greaterThan("sm")`
    body {
      overflow: unset;
    }
  `};
`;
