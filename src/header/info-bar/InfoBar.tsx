import React from "react";
import styled from "styled-components";

import useInfoBar from "hooks/useInfoBar";

import media from "lib/media";

import InfoBarLink from "./InfoBarLink";

const InfoBarWrapper = styled.div`
  display: none;
  ${media.greaterThan("sm")`
    display: block;
  `}
  background-color: rgb(241, 241, 241);
  padding: 5px 15px;
`;

const InfoBarList = styled.ul`
  padding: 0;
  margin: 0;
  border: 0;
  max-width: 1280px;
  margin: auto;
  display: flex;

  list-style: none;
`;

const InfoBarListItem = styled.li`
  white-space: nowrap;
  min-width: 0;
`;

export default function InfoBar(): JSX.Element {
  const [leftLinks, rightLinks] = useInfoBar();

  return (
    <InfoBarWrapper>
      <InfoBarList>
        {leftLinks.map((linkDescriptor) => (
          <InfoBarListItem
            key={`${linkDescriptor.label}-${linkDescriptor.href}`}
            style={{
              marginInlineEnd: "20px",
            }}
          >
            <InfoBarLink linkDescriptor={linkDescriptor} />
          </InfoBarListItem>
        ))}

        {rightLinks.map((linkDescriptor, index) => (
          <InfoBarListItem
            key={linkDescriptor.href}
            style={{
              marginInlineStart: index === 0 ? "auto" : "20px",
            }}
          >
            <InfoBarLink linkDescriptor={linkDescriptor} />
          </InfoBarListItem>
        ))}
      </InfoBarList>
    </InfoBarWrapper>
  );
}
