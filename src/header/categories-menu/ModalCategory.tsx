import React, { useState } from "react";
import Modal, { ModalBody, ModalCloseButton, ModalHeader } from "modal/Modal";
import { ModalLink } from "./types";

import styled from "styled-components";
import media from "lib/media";

import { fontSizeSmall, fontWeightNormal } from "lib/theme";

const A = styled.a`
  text-decoration: unset;
`;

const N1CategoryAnchor = styled(A)`
  ${fontSizeSmall}
  ${fontWeightNormal}
  letter-spacing: -0.4px;
  color: unset;
  padding: 12px 0px;
  font-size: 15px;

  letter-spacing: -0.5px;
  color: #000000;
  :hover {
    color: #4a4a4a;
  }
  ${media.lessThan("md")`
    font-size: 16px;
    padding:0px;
  `}
`;
const CategoriesMenuListItemWrapper = styled.div`
  ${media.greaterThan("sm")`
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    margin: 0px 10px;
`}
`;

const Title = styled.h1`
  margin: 0px;
  font-size: 22px;
  font-weight: 450;
  line-height: 1.14;

  ${media.lessThan("md")`
    font-size: 14px;
  `}
`;

const BodyContainter = styled.div`
  h2 {
    margin: 0px;
    font-size: 26px;
    font-weight: 300;
    line-height: 0.73;
    letter-spacing: -0.6px;
    text-align: center;
    display: block;
  }
  p {
    margin: 10px 0px 0px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.36;
    letter-spacing: -0.3px;
    text-align: center;
    color: rgb(102, 102, 102);
  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ModalCategory({ item }: { item: ModalLink }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        verticallyCenter={false}
        dialogStyle={{ marginTop: "50px" }}
      >
        {!!item.h1 && (
          <ModalHeader>
            <Title>{item.h1}</Title>
          </ModalHeader>
        )}

        <ModalBody>
          <BodyContainter>
            {!!item.h2 && <h2>{item.h2}</h2>}
            {!!item.h5 && <p>{item.h5}</p>}
          </BodyContainter>
        </ModalBody>

        <ModalCloseButton />
      </Modal>
      <CategoriesMenuListItemWrapper>
        <N1CategoryAnchor onClick={() => setOpen(true)} as="span">
          {item.label}
        </N1CategoryAnchor>
        {item.logo && <img src={item.logo.href} />}
      </CategoriesMenuListItemWrapper>
    </>
  );
}

export default ModalCategory;
