import React from "react";
import styled from "styled-components";

import Tooltip, { tooltipClosed, tooltipOpen } from "./Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
};

const Interactive = styled.button`
  border: 2px solid #409;
  border-radius: 5px;
  margin: 1em;
  padding: 0;
  background-color: none;
  text-decoration: none;
  outline: none;
  background: transparent;
  color: #409;
  padding: 1em;
  font-weight: 500;
  font-size: 1.5em;

  position: relative;
  ${tooltipClosed}
  &:focus, &:focus-within {
    ${tooltipOpen}
  }
`;

export const Default = (): React.ReactNode => (
  <>
    <Interactive>
      click me!
      <Tooltip>Peperoni</Tooltip>
    </Interactive>

    <Interactive>
      Custom
      <Tooltip color="green" backgroundColor="#f77">
        Peperoni
      </Tooltip>
    </Interactive>

    <div />

    <Interactive>
      Position: bottom left <Tooltip position="bottom-left">Peperoni</Tooltip>{" "}
    </Interactive>
    <Interactive>
      Position: bottom right <Tooltip position="bottom-right">Peperoni</Tooltip>{" "}
    </Interactive>

    <div />

    <Interactive>
      Position: top left <Tooltip position="top-left">Peperoni</Tooltip>{" "}
    </Interactive>
    <Interactive>
      Position: top right <Tooltip position="top-right">Peperoni</Tooltip>{" "}
    </Interactive>
  </>
);
