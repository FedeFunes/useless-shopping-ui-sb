import React, { forwardRef, useCallback, useState, useContext } from "react";
import type { Ref } from "react";
import styled from "styled-components";

import type LinkDescriptor from "apollo/types/LinkDescriptor";

import Svg from "common/Svg";

import Modal, { ModalBody, ModalCloseButton, ModalHeader } from "modal/Modal";

import useShoppingConfig from "hooks/useShoppingConfig";

import media from "lib/media";
import {
  fontSizeSmaller,
  fontSizeSmall,
  fontSizeNormal,
  fontSizeBiggest,
  fontWeightLight,
  fontWeightNormal,
} from "lib/theme";
import { DrawerContext } from "common/Drawer";

const InfoBarAnchor = styled.a`
  background-color: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  outline: none;
  cursor: pointer;

  color: #4a4a4a;
  ${fontWeightNormal}
  text-decoration: none;

  display: flex;
  align-items: center;

  min-width: 0;

  ${fontSizeNormal}
  ${media.greaterThan("sm")`
    ${fontSizeSmaller}
  `}
`;

const InfoBarLabel = styled.span``;

const InfoBarSvg = styled(Svg)`
  flex-shrink: 0;

  height: 1.85em;
  margin-inline-end: 0.5625em;
  ${media.greaterThan("sm")`
    height: 2em;
    margin-inline-end: 0.3077em;
    color: #888;
 `}
`;

const InfoModalTitle = styled.h1`
  margin: 0;

  font-size: 22px;
  font-weight: 450;
  line-height: 1.14;
`;
const InfoModalSubTitle = styled.h2`
  margin: 0px;
  ${fontSizeBiggest}
  ${fontWeightLight}
  line-height: 0.73;
  letter-spacing: -0.6px;
  text-align: center;
  display: block;
`;
const InfoModalLabel = styled.p`
  margin: 0;

  margin-top: 10px;
  ${fontSizeSmall}
  ${fontWeightLight}
  line-height: 1.36;
  letter-spacing: -0.3px;
  text-align: center;
  color: rgb(102, 102, 102);
`;

interface InfoBarLinkProps {
  linkDescriptor: LinkDescriptor;
  style?: React.DetailedHTMLProps<
    React.StyleHTMLAttributes<HTMLStyleElement>,
    HTMLStyleElement
  >;
  className?: string;
}

export default forwardRef(function InfoBarLink(
  {
    linkDescriptor: { logo, title, label, alt, target, href, modal },
    style,
    className,
  }: InfoBarLinkProps,
  ref: Ref<HTMLAnchorElement>,
): JSX.Element {
  const { anchorComponent: AnchorComponent } = useShoppingConfig();
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);
  const { onClose } = useContext(DrawerContext);

  return (
    <>
      {!modal && (
        <AnchorComponent
          href={href}
          target={target}
          style={{ textDecoration: "none" }}
          onClick={onClose}
        >
          <InfoBarAnchor
            as={"span" as never}
            className={className}
            style={style}
            ref={ref}
          >
            <InfoBarSvg title={title} alt={alt} src={logo} />
            <InfoBarLabel>{label}</InfoBarLabel>
          </InfoBarAnchor>
        </AnchorComponent>
      )}
      {modal && (
        <>
          <InfoBarAnchor
            as={"span" as never}
            onClick={modal && openModal}
            className={className}
            style={style}
            ref={ref}
          >
            <InfoBarSvg title={title} alt={alt} src={logo} />
            <InfoBarLabel>{label}</InfoBarLabel>
          </InfoBarAnchor>
          <Modal
            open={isModalOpen}
            onClose={closeModal}
            verticallyCenter={false}
            dialogStyle={{ marginTop: "50px" }}
          >
            {!!modal.title && (
              <ModalHeader>
                <InfoModalTitle>{modal.title}</InfoModalTitle>
              </ModalHeader>
            )}

            <ModalBody>
              {!!modal.subTitle && (
                <InfoModalSubTitle>{modal.subTitle}</InfoModalSubTitle>
              )}
              {!!modal.label && <InfoModalLabel>{modal.label}</InfoModalLabel>}
            </ModalBody>

            <ModalCloseButton />
          </Modal>
        </>
      )}
    </>
  );
});
