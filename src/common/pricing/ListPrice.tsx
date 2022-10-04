import styled from "styled-components";

import { fontSizeNormalBig } from "lib/theme";

const ListPrice = styled.span`
  text-decoration: line-through;
  ${fontSizeNormalBig}
  line-height: 1.66;
  letter-spacing: -0.26px;
  color: #888888;
`;

export default ListPrice;
