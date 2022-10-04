import React, { useMemo } from "react";

import styled from "styled-components";
import media from "lib/media";
import useShoppingConfig from "hooks/useShoppingConfig";

import { MenuSection, SubMenu } from "./types";

import linkAssigner from "../../helpers/linkAssigner";
import useTracking from "hooks/useTracking";
import useShowMenuCategory from "hooks/useShowMenuCategory";

const A = styled.a`
  text-decoration: unset;
`;

const N3Wrapper = styled.div`
  top: 0;
  left: 100%;
  position: absolute;
  background-color: #f4f2fa;
  width: 606px;
  display: flex;
  flex-flow: column;
  height: 419px;
  max-height: 419px;
  padding: 16px 32px;
  padding-bottom: 0px;
  z-index: 100;
  border-bottom-right-radius: 8px;

  box-shadow: rgb(0 0 0 / 10%) 0px 12px 32px 0px;

  &&a:hover {
    color: blue;
  }

  ${media.greaterThan("md")`
    width:718px;
  `}

  ${media.greaterThan("lg")`
    width:962px;
  `}

  ${media.greaterThan("xl")`
    width:981px;
  `}
`;

const N3Header = styled.div`
  display: flex;
  border-bottom: 1px solid #dadada;
  align-items: center;
  padding-bottom: 8px;
  margin-bottom: 24px;
`;

const N3Body = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const N3Column = styled.div`
  margin-bottom: 32px;
`;

const ParentTitle = styled.span`
  padding-right: 24px;
  font-size: 22px;
  font-weight: 600;
  color: #4a4a4a;
  border-right: 1px solid #dadada;
`;

const StyledAnchorN4 = styled.div`
  font-size: 13px;
  color: #000000;
  margin: 8px 0px;
  span:hover {
    text-decoration: underline;
  }
`;

const MasCategorias = styled.div`
  font-size: 14px;
  margin-top: 16px;
  color: #78777e;
`;

const StyledAnchor = styled.span`
  font-size: 14px;
  padding-left: 24px;
  :hover {
    color: #654bb9;
  }
`;

const StyledAnchorN3 = styled(A)`
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  :hover {
    color: #4a4a4a;
  }
`;

const TooltipN4 = styled.span`
  /* display: none; */
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 5px;

  /* Position the tooltip */
  position: absolute;
  ${StyledAnchorN4}:hover & {
    /* display: block; */
    visibility: visible;
  }
`;

const TooltipN3 = styled.span`
  /* display: none; */
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 5px;

  /* Position the tooltip */
  position: absolute;
  ${StyledAnchorN3}:hover & {
    /* display: block; */
    visibility: visible;
  }
`;

export default function CategoriesN3({
  sections,
  parent,
  path,
}: {
  sections: MenuSection[] | undefined;
  parent: SubMenu;
  path: string;
}): JSX.Element {
  const { shoppingURL, anchorComponent: AnchorComponent } = useShoppingConfig();
  const { setShow: setParentShow } = useShowMenuCategory();
  const [trackEvent] = useTracking();

  const orderedSections = useMemo(
    () =>
      sections
        .map((i) => i)
        .sort(
          (item1: MenuSection, item2: MenuSection) => item1.order - item2.order,
        ),
    [sections],
  );

  const handleClick = (value, path, index) => {
    trackEvent("fvg.header.click-menu-category", {
      value,
      path,
      index,
    });
    setParentShow(false);
  };

  return (
    <N3Wrapper>
      <N3Header>
        <ParentTitle>{parent.label}</ParentTitle>
        <AnchorComponent
          href={shoppingURL(linkAssigner(parent))}
          className="anchor-categories"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
          onClick={() =>
            handleClick(parent.label, `${path}/${parent.label}`, parent.order)
          }
        >
          <StyledAnchor>Ver todo</StyledAnchor>
        </AnchorComponent>
        <AnchorComponent
          href={shoppingURL(linkAssigner(parent.title))}
          className="anchor-categories"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginLeft: "auto",
          }}
          onClick={() =>
            handleClick(parent.label, `${path}/${parent.title}`, parent.order)
          }
        >
          <StyledAnchor>{parent.title?.logo?.label}</StyledAnchor>
        </AnchorComponent>
      </N3Header>
      <N3Body>
        {orderedSections?.slice(0, 8).map((column) => (
          <N3Column key={column.label}>
            <AnchorComponent
              key={column.label}
              href={shoppingURL(linkAssigner(column))}
              className="anchor-categories"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() =>
                handleClick(
                  column.label,
                  `${path}/${column.label}`,
                  column.order,
                )
              }
            >
              {column.label.length > 22 ? (
                <>
                  <StyledAnchorN3>
                    {column.label.substr(0, 22)}...
                    <TooltipN3>{column.label}</TooltipN3>
                  </StyledAnchorN3>
                </>
              ) : (
                <StyledAnchorN3>{column.label}</StyledAnchorN3>
              )}
            </AnchorComponent>
            {column?.items
              ?.map((i) => i)
              .sort(
                (item1: SubMenu, item2: SubMenu) => item1.order - item2.order,
              )
              .slice(0, 4)
              .map((item, index) => (
                <StyledAnchorN4 key={column.label}>
                  <AnchorComponent
                    href={shoppingURL(linkAssigner(item))}
                    className="anchor-categories"
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={() => {
                      handleClick(item.label, `${path}/${item.label}`, index);
                    }}
                  >
                    {item.label.length > 25 ? (
                      <span>
                        {item.label.substr(0, 25)}...
                        <TooltipN4>{item.label}</TooltipN4>
                      </span>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </AnchorComponent>
                </StyledAnchorN4>
              ))}
            {column?.items?.length > 4 && (
              <AnchorComponent
                key={column.label}
                href={shoppingURL(linkAssigner(parent))}
                className="anchor-categories"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() =>
                  handleClick("Mas categorias", `${path}/ Mas categorias`, 4)
                }
              >
                <MasCategorias>Mas categorias</MasCategorias>
              </AnchorComponent>
            )}
          </N3Column>
        ))}
        {orderedSections?.slice(8, 12).map((column, i) => (
          <N3Column key={column.label}>
            <AnchorComponent
              key={column.label}
              href={shoppingURL(linkAssigner(column))}
              className="anchor-categories"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() =>
                handleClick(column.label, shoppingURL(linkAssigner(column)), i)
              }
            >
              {column.label.length > 20 ? (
                <>
                  <StyledAnchorN3>
                    {column.label.substr(0, 20)}...
                    <TooltipN3>{column.label}</TooltipN3>
                  </StyledAnchorN3>
                </>
              ) : (
                <StyledAnchorN3>{column.label}</StyledAnchorN3>
              )}
            </AnchorComponent>
          </N3Column>
        ))}
      </N3Body>
    </N3Wrapper>
  );
}
