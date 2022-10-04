import React, { ReactNode, useContext } from "react";
import { bool, string, func, node } from "prop-types";
import styled from "styled-components";
import AriaModal from "react-aria-modal";

import Svg from "common/Svg";
import baseStyle from "common/baseStyle";

import media from "lib/media";

function getDocumentBody() {
  return global.document?.body.children[0];
}

const Wrapper = styled(({ className, ...props }) => (
  <AriaModal dialogClass={className} {...props} />
))`
  border: solid 1px #4a4a4a;
  border-radius: 2px;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.5);
  background: #fff;
  position: relative;
  ${media.lessThan("sm")`
      top: 35px !important;
      max-width: 75% !important;
  `}
  ${baseStyle}
`;

const ModalContext = React.createContext({
  open: false,
  onClose: () => {
    //Do nothing
  },
});

interface Props {
  open: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  titleText?: string;
  getApplicationNode?: () => void;
  children: ReactNode;
  alert?: boolean;
  initialFocus?: string;
  underlayClickExits?: boolean;
  escapeExits?: boolean;
  verticallyCenter?: boolean;
  underlayColor?: string;
  dialogStyle?: React.CSSProperties;
  scrollDisabled?: boolean;
}

/**
 *
 * prop docs at https://github.com/davidtheclark/react-aria-modal
 *
 * @param {{
 *  open: Boolean,
 *  onOpen: Function?,
 *  onClose: Function?,
 *  titleText: String?,
 *  getApplicationNode: Function?,
 *  children: Object,
 *  alert: Boolean?,
 *  initialFocus: String?,
 *  underlayClickExits: Boolean?,
 *  escapeExits: Boolean?,
 *  verticallyCenter: Boolean?,
 *  scrollDisabled: Boolean?,
 *  }} props
 */
function Modal({
  open,
  onOpen,
  onClose,
  titleText,
  getApplicationNode,
  children,
  alert,
  initialFocus,
  underlayClickExits,
  escapeExits,
  verticallyCenter,
  underlayColor,
  scrollDisabled,
  ...props
}: Props): JSX.Element {
  return (
    <ModalContext.Provider value={{ open, onClose }}>
      {open && (
        <Wrapper
          onEnter={onOpen}
          onExit={onClose}
          titleText={titleText}
          getApplicationNode={getApplicationNode}
          alert={alert}
          initialFocus={initialFocus}
          underlayClickExits={underlayClickExits}
          escapeExits={escapeExits}
          verticallyCenter={verticallyCenter}
          underlayColor={underlayColor}
          scrollDisabled={scrollDisabled}
          {...props}
        >
          {children}
        </Wrapper>
      )}
    </ModalContext.Provider>
  );
}

function noop() {
  // Do nothing
}

Modal.propTypes = {
  open: bool,
  onOpen: func,
  onClose: func,
  titleText: string,
  getApplicationNode: func,
  children: node,
  alert: bool,
  initialFocus: string,
  underlayClickExits: bool,
  escapeExits: bool,
  verticallyCenter: bool,
  underlayColor: string,
};

Modal.defaultProps = {
  open: false,
  onOpen: noop,
  onClose: noop,
  titleText: "modal",
  getApplicationNode: getDocumentBody,
  children: undefined,
  alert: false,
  initialFocus: undefined,
  underlayClickExits: true,
  escapeExits: true,
  verticallyCenter: true,
  underlayColor: "rgba(0, 0, 0, 0.6)",
  scrollDisabled: true,
};

export default Modal;

const CloseIcon = styled(Svg).attrs({
  src: "/static/svg/close.svg",
})`
  width: 0.75em;
  color: #4a4a4a;
`;

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

export function ModalCloseButton(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
): JSX.Element {
  const { onClose } = useContext(ModalContext);

  return (
    <CloseButton onClick={onClose} {...(props as unknown)}>
      <CloseIcon />
    </CloseButton>
  );
}

export const ModalHeader = styled.div`
  border-bottom: 1px solid #e8e8e8;
  padding: 10px 24px;
`;

export const ModalBody = styled.div`
  padding: 24px;
`;
