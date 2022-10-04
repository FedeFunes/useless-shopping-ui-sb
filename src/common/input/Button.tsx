import styled, { css } from "styled-components";

import { fontSizeSmaller, fontWeightBold } from "lib/theme";

const filledPrimary = css`
  background-color: #440099;
  border: solid 1px #440099;
  color: white;

  :disabled {
    background-color: #654bb9;
    border-color: #654bb9;
  }
`;

const outlinedPrimary = css`
  background-color: transparent;
  border: solid 1px #440099;
  color: #440099;

  :disabled {
    color: #654bb9;
    border-color: #654bb9;
  }
`;

interface Props {
  variant?: "outlined" | "filled";
}

const Button = styled.button<Props>`
  ${({ variant }) => {
    switch (variant) {
      case "outlined":
        return outlinedPrimary;
      default:
        return filledPrimary;
    }
  }}

  border-radius: 2px;
  cursor: pointer;
  ${fontSizeSmaller}
  ${fontWeightBold}
  letter-spacing: -0.4px;
  line-height: 1;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  :disabled {
    cursor: unset;
  }
`;

export default Button;
