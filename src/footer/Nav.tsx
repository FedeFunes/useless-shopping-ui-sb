import React from "react";
import styled from "styled-components";

import Button from "common/input/Button";

import useFooter from "hooks/useFooter";
import type { FooterContext } from "hooks/useFooter";

import media from "lib/media";
import {
  fontSizeSmall,
  fontSizeNormal,
  fontWeightNormal,
  fontWeightBold,
} from "lib/theme";

const StyledNav = styled.nav`
  display: contents;

  ${media.lessThan("sm")`
    display: none;
  `}
`;

const Column = styled.section`
  color: #4a4a4a;
  padding: 0;
`;

const Link = styled.a`
  ${fontSizeNormal}
  ${fontWeightNormal}
  color: #006afd;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const H3 = styled.h3`
  ${fontSizeSmall}
  ${fontWeightBold}
  line-height: 1;
  margin: 0;
`;

const Title = styled(H3)`
  color: #4a4a4a;
  margin-bottom: 4px;
  ${fontSizeSmall}
  ${fontWeightBold}
`;

const NavLink = styled(Link)`
  color: #4a4a4a;
  letter-spacing: -0.2px;
  ${fontSizeSmall}
  ${fontWeightNormal}
`;

const NavLinkList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavLinkListItem = styled.li`
  margin: 0.7em 0;
`;

interface NavProps {
  context: FooterContext;
}

const Nav: React.FC<NavProps> = ({ context }: NavProps) => {
  const [sections] = useFooter(context);

  return (
    <StyledNav>
      {sections.map(({ label, links }) => (
        <Column key={label}>
          <Title as="span">{label}</Title>
          <NavLinkList>
            {links.map((link) => (
              <NavLinkListItem key={link.label}>
                {link.appearance === "button" ? (
                  <Button
                    as="a"
                    variant="outlined"
                    title={link.title}
                    href={link.href}
                    target={link.target}
                    style={{ display: "inline-block" }}
                  >
                    {link.label}
                  </Button>
                ) : (
                  <NavLink
                    title={link.title}
                    href={link.href}
                    target={link.target}
                  >
                    {link.label}
                  </NavLink>
                )}
              </NavLinkListItem>
            ))}
          </NavLinkList>
        </Column>
      ))}
    </StyledNav>
  );
};

export default Nav;
