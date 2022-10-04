import React, { forwardRef, useCallback, useState } from "react";
import styled from "styled-components";

import baseStyle from "common/baseStyle";
import Drawer, {
  DrawerCloseButton,
  DrawerSection,
  DrawerHr,
} from "common/Drawer";
import Svg from "common/Svg";
import Hr from "common/Hr";

import media from "lib/media";

import CategoriesMenu from "./categories-menu";
import CategoriesTree from "./categories-tree/CategoriesTree";
import FravegaHeaderLogo from "./FravegaHeaderLogo";
import InfoBar, { DrawerInfo } from "./info-bar";
import SearchBox from "./SearchBox";
import UserIcon from "./userInfo/UserIcon";
import UserCart from "./cart/UserCart";
import HeaderGeo from "./HeaderGeo";
import CheckoutGeo from "./CheckoutGeo";

const Row = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto auto;
  grid-template-areas: "extra logo user cart" "search search search search" "geo geo geo geo";
  grid-gap: 0.6em 1em;

  padding: 0.6em 1em;
  max-width: 1280px;
  margin: auto;

  ${media.greaterThan("sm")`
    grid-template-columns: 25% 1fr auto auto;
    grid-template-columns: clamp(10em, 25%, 15em) 1fr auto auto;
    grid-gap: 0.5em 2em;
    grid-template-areas: "logo search extra user cart" "geo search extra user cart";
    padding: 1em;
  `}
`;

const UserInfoWrapper = styled.div`
  display: none;
  ${media.greaterThan("sm")`
    display: flex;
    flex-direction: row;
  `}
`;

const DesktopCategoriesMenu = styled(CategoriesMenu)`
  display: none;
  ${media.greaterThan("sm")`
    display: block;
  `}
`;

const DesktopHr = styled(Hr)`
  display: none;
  ${media.greaterThan("sm")`
    display: block;
  `}
`;

const HamburgerButton = styled.button`
  border: 0;
  background: none;
  padding: 0;
  margin: 0;

  ${media.greaterThan("sm")`
    display:none;
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 32px 24px;
`;

const HamburgerIcon = styled(Svg).attrs({
  src: "/static/svg/icon-hamburger.svg",
})`
  color: #4a4a4a;
`;

const HeaderWrapper = styled.header`
  position: sticky;
  top: -40px; /* magic number sticky header */
  background-color: white;
  z-index: 900;
  box-sizing: unset;
  min-height: unset;
  min-width: unset;

  &&& {
    box-sizing: content-box;
  }

  * {
    box-sizing: content-box;
  }

  ${media.greaterThan("sm")`
    position: relative;
    top: unset;
  `}

  ${baseStyle}
`;

const MobileDrawer = styled(Drawer)`
  ${media.greaterThan("sm")`
    display: none;
  `}
`;

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLFieldSetElement>,
  HTMLFieldSetElement
> & {
  searchBoxInitialKeyword?: string;
  context?: string;
  searchByCategory?: { name: string; slug: string };
};

const Header = forwardRef(function Header(
  { searchBoxInitialKeyword, context, searchByCategory, ...props }: HeaderProps,
  ref: React.Ref<HTMLFieldSetElement>,
) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <HeaderWrapper {...props} ref={ref}>
      <CheckoutGeo />
      <InfoBar />
      <Row>
        <FravegaHeaderLogo style={{ gridArea: "logo" }} />

        <SearchBox
          searchBoxInitialKeyword={searchBoxInitialKeyword}
          searchByCategory={searchByCategory}
          style={{ gridArea: "search" }}
        />

        <UserInfoWrapper style={{ gridArea: "extra" }}></UserInfoWrapper>
        <UserIcon style={{ gridArea: "user" }} />

        <UserCart style={{ gridArea: "cart" }} />

        <HamburgerButton style={{ gridArea: "extra" }} onClick={openDrawer}>
          <HamburgerIcon />
        </HamburgerButton>

        {typeof window !== "undefined" && (
          <HeaderGeo context={context} style={{ gridArea: "geo" }} />
        )}
      </Row>

      <Hr />

      <DesktopCategoriesMenu />

      <DesktopHr />

      <MobileDrawer open={drawerOpen} onClose={closeDrawer}>
        <ButtonContainer>
          <DrawerCloseButton />
        </ButtonContainer>
        <CategoriesTree />
        <DrawerHr />

        <DrawerSection>
          <DrawerInfo />
        </DrawerSection>
      </MobileDrawer>
    </HeaderWrapper>
  );
});

export default Header;
