import styled from "styled-components";
import { fontSizeSmall } from "lib/theme";

const Discount = styled.span`
  align-self: center;

  border-radius: 2px;
  padding: 2px 3px;
  background-color: #d93175;

  line-height: 1;
  ${fontSizeSmall}
  letter-spacing: -0.28px;
  color: #ffffff;

  &:after {
    ${fontSizeSmall}
    content: "% OFF";
  }
`;

export default Discount;
