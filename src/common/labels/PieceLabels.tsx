import React from "react";
import styled from "styled-components";

import { fontSizeSmall } from "lib/theme";

import PieceLabelName from "./PieceLabelName";

const PieceLabelsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;

  margin: -0.1em;
`;

const PieceLabel = styled.li`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  background-color: #eff7f2;
  color: #208041;
  border-radius: 3px;
  padding: 2px 5px;
  margin: 0.3em 0.3em 0.3em 0;
  list-style: none;

  font-family: Arial;
  ${fontSizeSmall}
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
`;

interface Props {
  className?: string;
  children?: JSX.Element;
  labels: string[];
}

export default function PieceLabels({
  className,
  children,
  labels,
}: Props): JSX.Element {
  if (!labels || !labels.length) return null;

  return (
    <PieceLabelsWrapper data-test-id="product-labels" className={className}>
      {labels.map((label) => (
        <PieceLabel key={label}>
          <PieceLabelName label={label} />
        </PieceLabel>
      ))}
      {children}
    </PieceLabelsWrapper>
  );
}
