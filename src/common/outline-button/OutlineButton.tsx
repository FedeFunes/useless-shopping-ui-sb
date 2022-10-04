import React from "react";
import styled from "styled-components";

import {
  fontSizeNormalSmaller,
  fontWeightBold,
  fontFamilyGlobal,
} from "lib/theme";

const Button = styled.button`
  ${fontSizeNormalSmaller}
  ${fontWeightBold}
  ${fontFamilyGlobal}
  padding: 10px;
  background-color: transparent;
  border: solid 1px #441799;
  letter-spacing: -0.4px;
  text-align: center;
  border-radius: 2px;
  line-height: 1;
  color: #441799;
  text-transform: uppercase;
  cursor: pointer;

  :disabled {
    cursor: unset;
    color: #a9a9a9;
    border-color: #a9a9a9;
  }
`;

interface Props {
  className?: string;
  children?: string;
  onClick: () => unknown;
}

export default function OutlineButton({
  className,
  children,
  onClick,
}: Props): JSX.Element {
  return (
    <Button className={className} onClick={onClick}>
      {" "}
      {children}{" "}
    </Button>
  );
}
