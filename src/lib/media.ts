import styled from "styled-components";
import { generateMedia } from "styled-media-query";

export const sizes = {
  xl: "1366",
  lg: "1200px",
  md: "1024px",
  sm: "768px",
  xs: "480px",
};

export const pxs = {
  xl: 1366,
  lg: 1200,
  md: 1024,
  sm: 768,
  xs: 480,
};

const media = generateMedia(sizes);

export const Desktop = styled.div`
  display: none;
  ${media.greaterThan("sm")`
    display: contents;
  `}
`;

export const Mobile = styled.div`
  display: contents;
  ${media.greaterThan("sm")`
    display: none;
  `}
`;

export default media;
