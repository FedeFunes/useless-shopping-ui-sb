import React, { ReactNode } from "react";
import styled from "styled-components";

import { DisableBodyScrollMobile } from "common/DisableBodyScroll";

import { fontSizeBig } from "lib/theme";

const Hr = styled.hr`
  border: 0;
  margin: 0;
  border-bottom: 1px solid #dadada;
`;

interface Props {
  open: boolean;
  onClose?: () => unknown;
  children: ReactNode;
}

const Overlay = styled.div`
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 160vh;
  transition: background-color 350ms;
  &[data-open="true"] {
    pointer-events: all;
    background-color: #00000088;
  }

  z-index: 950;
`;

const DrawerWrapper = styled.aside`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 100vw;
  ${fontSizeBig}
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 350ms cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  &[data-open="true"] {
    transform: translateX(0);
  }
`;

function stopPropagation(event) {
  event.stopPropagation();
}

export const DrawerSection = styled.section`
  padding: 0.85em 1em;
`;

export const DrawerHr = styled(Hr)`
  border-color: #ddd;
`;

export const DrawerContext = React.createContext({
  open: false,
  onClose: () => {
    //Do nothing
  },
});

export default function DrawerSideways({
  open,
  onClose,
  children,
  ...props
}: Props): JSX.Element {
  return (
    <>
      {open && <DisableBodyScrollMobile />}
      <Overlay data-open={open} onClick={onClose} {...props}>
        <DrawerWrapper data-open={open} onClick={stopPropagation}>
          {children}
        </DrawerWrapper>
      </Overlay>
    </>
  );
}

export const DrawerUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
`;

export const DrawerLi = styled.li`
  & + & {
    margin-block-start: 1.1em;
  }
`;
