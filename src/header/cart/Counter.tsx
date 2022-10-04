import styled from "styled-components";

import { fontSizeSmallest, fontWeightBold } from "lib/theme";

export default styled.span`
  background: #cf0096;
  ${fontWeightBold}
  border-radius: 50%;
  color: #ffffff;
  width: 16px;
  height: 16px;
  ${fontSizeSmallest}
  text-align: center;
  line-height: 16px;
`;
