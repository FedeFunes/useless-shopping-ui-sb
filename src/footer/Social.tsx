import React from "react";
import styled from "styled-components";

import Svg from "common/Svg";

import media from "lib/media";

const StyledSocial = styled.div`
  ${media.greaterThan("xs")`
    grid-column: 1 / span 3;
  `}
  ${media.greaterThan("sm")`
    grid-column: 1;
  `}
`;

const IconsContainer = styled.div`
  display: none;
  ${media.greaterThan("sm")`
    display: inline-block;
  `}
`;

const Icons = styled.div`
  margin-top: 10px;
  display: grid;
  grid-gap: 10px;

  grid-template-columns: repeat(5, 1fr);
  ${media.lessThan("sm")`
    display: none;
  `}
`;

const StyledLogo = styled(Svg).attrs({
  src: "/static/svg/fravega-logo.svg",
  alt: "Frávega logo",
  title: "Frávega",
})`
  height: 23px;
  ${media.greaterThan("xs")`
    height: 25px;
  `}
  ${media.greaterThan("md")`
    height: 30px;
  `}
`;

const Icon = styled.span`
  display: inline-flex;
  align-self: center;
  background-color: #cccccc;
  height: auto;
  padding: 6px;
  border-radius: 100%;
`;

const IconLink = styled.a``;

const SocialSvg = styled(Svg)`
  height: 16px;
  width: 16px;
  fill: white;
`;

const links = [
  {
    icon: "/static/svg/icon-fb.svg",
    title: "Facebook",
    url: "//www.facebook.com/fravegaonline",
  },
  {
    icon: "/static/svg/icon-ig.svg",
    title: "Instagram",
    url: "//www.instagram.com/fravegaonline",
  },
  {
    icon: "/static/svg/icon-yt.svg",
    title: "Youtube",
    url: "//www.youtube.com/user/fravegaonline",
  },
  {
    icon: "/static/svg/icon-tw.svg",
    title: "Twitter",
    url: "//twitter.com/fravegaonline",
  },
  {
    icon: "/static/svg/icon-in.svg",
    title: "Linkedin",
    url: "//www.linkedin.com/company/fravega-saciei",
  },
];
const Social: React.FC = () => (
  <StyledSocial data-test-id="footer-social">
    <StyledLogo />
    <IconsContainer>
      <Icons>
        {links.map((l) => (
          <IconLink href={l.url} title={l.title} key={l.url}>
            <Icon>
              <SocialSvg src={l.icon} alt={l.title} title={l.title} />
            </Icon>
          </IconLink>
        ))}
      </Icons>
    </IconsContainer>
  </StyledSocial>
);

export default Social;
