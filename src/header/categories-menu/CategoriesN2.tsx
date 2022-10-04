import React, { useState } from "react";

import styled from "styled-components";
import media from "lib/media";
import useShoppingConfig from "hooks/useShoppingConfig";
import useTracking from "hooks/useTracking";

import Svg from "common/Svg";
import { MenuSection, SubMenu } from "./types";

import linkAssigner from "../../helpers/linkAssigner";

import CategoriesN3 from "./CategoriesN3";
import useShowMenuCategory from "hooks/useShowMenuCategory";

const ActiveClass = styled.div`
  background-color: #654bb9;
  width: 0px;
  height: 0;
  padding-right: 4px;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  transition: height 0.05s ease-in;
`;

const DefaultAnchorStyle = styled.span`
  text-decoration: none;
  letter-spacing: -0.4px;
  padding-left: 23px;
  padding-right: 4px;
  color: #000000;
  :hover {
    text-decoration: underline;
  }
`;

const StyledContainerN2 = styled.div`
  :hover {
    background-color: #f4f2fa;
  }

  &:hover ${ActiveClass} {
    height: 150%;
  }
`;

const StyledN2Wrapper = styled.div`
  /* padding: 10px 12px 12px; */
  padding: 12px 12px 12px 0px;
  display: grid;
  align-items: center;
  grid-template-columns: 10px 1fr auto;
  cursor: pointer;
  font-size: 14px;

  &:hover ${ActiveClass} {
    height: 150%;
  }
`;

const StyledCategoriesN2 = styled.div`
  position: absolute;
  top: 101%;
  padding-top: 8px;
  padding-bottom: 9px;
  left: -24%;
  height: 418px;
  padding-inline-start: 0px;
  list-style-type: unset;
  box-shadow: rgb(0 0 0 / 10%) 0px 12px 32px 0px;
  background-color: #ffffff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 100;

  :hover {
    border-bottom-right-radius: 0px;
  }

  ${media.greaterThan("md")`
    width:220px;
    max-width:220px;
  `}
  ${media.greaterThan("lg")`
    width:300px;
    max-width:300px;
  `}
  ${media.greaterThan("xl")`
    width:299px;
    max-width:299px;
  `}

  div:last-child {
    border-bottom: none;
  }
`;

function CategoryMenuN2Assigner({
  item,
  path,
}: {
  path: string;
  item: SubMenu;
}) {
  const { shoppingURL, anchorComponent: AnchorComponent } = useShoppingConfig();
  const [show, setShow] = useState(false);
  const { setShow: setParentShow } = useShowMenuCategory();

  const [trackEvent] = useTracking();

  const newPath = `${path}/${item.label}`;

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
    setParentShow(false);
  };

  switch (item.type) {
    case "SubMenu":
      return (
        <StyledContainerN2
          onMouseLeave={handleOnMouseLeave}
          onMouseEnter={handleOnMouseEnter}
        >
          <StyledN2Wrapper>
            <ActiveClass />
            <AnchorComponent
              key={item.label}
              href={shoppingURL(linkAssigner(item))}
              className="anchor-categories"
              style={{
                textDecoration: "none",
                color: "inherit",
                letterSpacing: "-0.4px",
                whiteSpace: "break-spaces",
                paddingLeft: "12px",
              }}
              onClick={() => handleClick(item.label, newPath, item.order)}
            >
              {item.label}
            </AnchorComponent>

            <Svg
              src="/static/svg/icon-chevron-right.svg"
              alt={"chevron-right"}
            />
          </StyledN2Wrapper>
          {show && (
            <CategoriesN3
              path={newPath}
              sections={item.sections}
              parent={item}
            />
          )}
        </StyledContainerN2>
      );
    default:
      return (
        <StyledN2Wrapper>
          <AnchorComponent
            key={item.label}
            href={shoppingURL(linkAssigner(item))}
            className="anchor-categories"
            style={{ textDecoration: "none" }}
            onClick={() => handleClick(item.label, newPath, item.order)}
          >
            <DefaultAnchorStyle> {item.label}</DefaultAnchorStyle>
          </AnchorComponent>
        </StyledN2Wrapper>
      );
  }
}

const CategoryN2Container = styled.div`
  /* margin: 0px 12px; */
  border-bottom: 1px solid #e5e5e5;
`;

export default function CategoriesN2({
  path,
  sections,
}: {
  path: string;
  sections: MenuSection[];
}) {
  return (
    <StyledCategoriesN2>
      {sections.map((section: MenuSection) => (
        <CategoryN2Container
          key={`${section.order} ${section.column} ${section.label} `}
        >
          {section.items
            .map((i) => i)
            .sort((item1: SubMenu, item2: SubMenu) => item1.order - item2.order)
            .map((item: SubMenu) => (
              <CategoryMenuN2Assigner
                key={`${item.order} ${item.column} ${item.label} `}
                item={item}
                path={path}
              />
            ))}
        </CategoryN2Container>
      ))}
    </StyledCategoriesN2>
  );
}
