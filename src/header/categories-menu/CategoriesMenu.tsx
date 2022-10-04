import React, { useMemo } from "react";
import styled from "styled-components";

import useMenuCategories from "hooks/useMenuCategories";

import Svg from "common/Svg";
import CategoryModal from "./ModalCategory";

import media from "lib/media";

import { fontSizeSmall, fontWeightNormal } from "lib/theme";
import useShoppingConfig from "hooks/useShoppingConfig";
import { MenuSection, LinkUnion, SubMenu } from "./types";

import CategoriesN2 from "./CategoriesN2";

import linkAssigner from "../../helpers/linkAssigner";
import useTracking from "hooks/useTracking";
import useShowMenuCategory, {
  ShowMenuCategoryProvider,
} from "hooks/useShowMenuCategory";

const CategoriesMenuList = styled.div`
  ${media.greaterThan("sm")`
    max-width: 1280px;
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    justify-content: space-between;
    margin: auto;

    list-style: none;
    white-space: nowrap;
    padding: 0;

    & > * {
      flex-shrink: 0;
    }
  `}
`;

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
`;

const CategoriesMenuListItemWrapper = styled.div`
  ${media.greaterThan("sm")`
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    background-color: transparent;
    z-index: 2;
  `}
`;

const MainCategoriesMenuListItemWrapper = styled(CategoriesMenuListItemWrapper)`
  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: black;
    transform: scale(0);
    transition: all 0.1s ease-in;
    z-index: 1;
  }
  :hover {
    :after {
      transform: scale(1);
    }
  }
`;

const CategoriesMenuOuterWrapper = styled.div`
  position: relative;
  padding: 0px 16px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100vh;
  overflow: hidden;
  opacity: 30%;
  background-color: rgba(0, 0, 0, 0.7);

  body {
    overflow: hidden;
  }
`;

function CategoryMenuN1Assigner({ item }: { item: SubMenu | LinkUnion }) {
  const { shoppingURL, anchorComponent: AnchorComponent } = useShoppingConfig();

  const { show, setShow } = useShowMenuCategory();

  const [trackEvent] = useTracking();

  const handleOnMouseEnter = () => {
    setShow(true);
  };

  const handleOnMouseLeave = () => {
    setShow(false);
  };

  const handleClick = (value, path, index) => {
    trackEvent("fvg.header.click-menu-category", {
      value,
      path,
      index,
    });
  };
  switch (item.type) {
    case "SubMenu":
      return (
        <>
          <MainCategoriesMenuListItemWrapper
            onMouseLeave={handleOnMouseLeave}
            onMouseEnter={handleOnMouseEnter}
          >
            <Svg
              style={{ marginRight: "10px" }}
              src="/static/svg/burguer-menu.svg"
              alt={"burguer-menu"}
            />
            <N1CategoryAnchor
              onClick={() => handleClick(item.label, item.label, item.order)}
              as="span"
            >
              {item.label}
            </N1CategoryAnchor>
            <span
              style={{
                paddingLeft: "8px",
              }}
            ></span>
            {show && (
              <CategoriesN2 path={item.label} sections={item.sections} />
            )}
          </MainCategoriesMenuListItemWrapper>
          {show && <Overlay />}
        </>
      );
    case "ModalLink":
      return <CategoryModal item={item} />;

    default:
      return (
        <CategoriesMenuListItemWrapper>
          <AnchorComponent
            key={item.label}
            href={shoppingURL(linkAssigner(item))}
            className="anchor-categories"
            style={{
              textDecoration: "none",
              color: "#4a4a4a",
              letterSpacing: "-0.4px",
              padding: "12px 0px",
            }}
            onClick={() => handleClick(item.label, item.label, item.order)}
          >
            <N1CategoryAnchor as="span">{item.label}</N1CategoryAnchor>
            {item.logo && item.logo.isShowedDesktop && (
              <img
                style={{ marginLeft: "8px", width: "20px" }}
                src={item.logo.href}
              />
            )}
          </AnchorComponent>
        </CategoriesMenuListItemWrapper>
      );
  }
}

const StyledN1Section = styled.div`
  display: flex;

  div:first-child {
    margin-left: 0px;
  }
`;

// eslint-disable-next-line react/prop-types
function SectionN1({ children }) {
  return <StyledN1Section>{children}</StyledN1Section>;
}

export default function CategoriesMenu(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
): JSX.Element {
  const { categoryMenu, loading } = useMenuCategories();

  const sectionN1 = useMemo(() => (loading ? [] : categoryMenu?.sections), [
    categoryMenu,
  ]);
  if (loading) {
    return <> </>;
  }
  return (
    <CategoriesMenuOuterWrapper {...(props as never)}>
      <CategoriesMenuList>
        {sectionN1?.map((section: MenuSection) => (
          <SectionN1
            key={`${section.order} ${section.column} ${section.label} `}
          >
            {section.items
              .map((i) => i)
              .sort(
                (item1: SubMenu, item2: SubMenu) => item1.order - item2.order,
              )
              .map((item: SubMenu) => (
                <ShowMenuCategoryProvider
                  key={`${item.order} ${item.column} ${item.label} `}
                >
                  <CategoryMenuN1Assigner item={item} />
                </ShowMenuCategoryProvider>
              ))}
          </SectionN1>
        ))}
      </CategoriesMenuList>
    </CategoriesMenuOuterWrapper>
  );
}
