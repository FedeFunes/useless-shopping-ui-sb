import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Svg from "common/Svg";

const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 16px;
  right: 16px;
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
  outline: none;
`;

const CloseIcon = styled(Svg).attrs({
  src: "/static/svg/close.svg",
})`
  width: 20px;
  color: #4a4a4a;
  cursor: pointer;
`;

const StyledModal = styled.div`
  position: fixed;
  z-index: 5;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.5);
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 999999;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99999;

  body {
    overflow: hidden;
  }
`;

function disableScrolling() {
  const x = window.scrollX;
  const y = window.scrollY;
  window.onscroll = () => window.scrollTo(x, y);
}

function enableScrolling() {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  window.onscroll = () => {};
}

export default function Modal({ children, open, onClose, ...props }) {
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    open ? disableScrolling() : enableScrolling();
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <StyledModal {...props}>
        {children}
        <CloseButton onClick={onClose} data-test-id="close-modal-button">
          <CloseIcon />
        </CloseButton>
      </StyledModal>
      <Overlay onClick={onClose} />
    </>,
    document.getElementById("modal"),
  );
}
