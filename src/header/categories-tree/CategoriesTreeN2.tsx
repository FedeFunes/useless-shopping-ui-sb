import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import Svg from "common/Svg";

import linkAssigner from "../../helpers/linkAssigner";

import useShoppingConfig from "hooks/useShoppingConfig";

import { DrawerCloseButton, DrawerContext } from "common/Drawer";

import {
  MenuItemUnion,
  MenuSection,
  SubMenu,
} from "header/categories-menu/types";
import DrawerSideways from "./DrawerSideways";
import useTracking from "hooks/useTracking";

const Hr = styled.hr`
  border: 0;
  margin: 0;
  border-bottom: 1px solid #dadada;
`;

const DrawerContainer = styled.div`
  margin: 32px 0px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto;
`;

interface CategoryProps {
  category: MenuItemUnion | MenuSection;
}

const BackButton = styled.button`
  background: none;
  border: 0;
  padding: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 32px 24px;
`;

const ParentLabel = styled.div`
  margin: 0px 24px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.5px;
  color: #000000;
`;

function MenuSectionDrawer({ section }: { section: MenuSection }) {
  const { open: parentOpen, onClose } = useContext(DrawerContext);
  const { shoppingURL, anchorComponent: AnchorComponent } = useShoppingConfig();
  const [trackEvent] = useTracking();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!parentOpen) {
      setOpen(false);
    }
  }, [parentOpen]);

  const handleClick = (value, path, index) => {
    trackEvent("fvg.header.click-menu-category", {
      value,
      path,
      index,
    });
    onClose();
  };

  const isOpen = open && parentOpen;
  return (
    <>
      <DrawerContainer onClick={() => setOpen(true)}>
        <ItemLabel>{section.label}</ItemLabel>
        <Svg src="/static/svg/icon-chevron-right.svg" alt={"chevron-right"} />
      </DrawerContainer>
      <DrawerSideways open={isOpen}>
        <ButtonContainer>
          <BackButton>
            <Svg
              src="/static/svg/icon-arrow-back.svg"
              onClick={() => setOpen(false)}
              alt={"arrow-back"}
            />
          </BackButton>
          <DrawerCloseButton />
        </ButtonContainer>
        {section.label && section.title && (
          <ParentLabel>
            <Title>{section.label}</Title>
            <AnchorComponent
              key={section.label}
              href={shoppingURL(linkAssigner(section))}
              className="anchor-categories"
              style={{
                textDecoration: "none",
                fontSize: "16px",
                color: "#000000",
              }}
              onClick={() =>
                handleClick(
                  section.label,
                  shoppingURL(linkAssigner(section)),
                  section.order,
                )
              }
            >
              Ver Todos
            </AnchorComponent>
          </ParentLabel>
        )}
        <Container>
          {section.items.map((item) => (
            <Category key={item.label} category={item} />
          ))}
        </Container>
      </DrawerSideways>
    </>
  );
}

function MenuDrawer({ category }: { category: SubMenu }) {
  const { open: parentOpen, onClose } = useContext(DrawerContext);
  const { shoppingURL, anchorComponent: AnchorComponent } = useShoppingConfig();
  const [trackEvent] = useTracking();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!parentOpen) {
      setOpen(false);
    }
  }, [parentOpen]);

  const handleClick = (value, path, index) => {
    trackEvent("fvg.header.click-menu-category", {
      value,
      path,
      index,
    });
    onClose();
  };

  const isOpen = open && parentOpen;
  return (
    <>
      <DrawerContainer onClick={() => setOpen(true)}>
        <ItemLabel>{category.label}</ItemLabel>
        <Svg src="/static/svg/icon-chevron-right.svg" alt={"chevron-right"} />
      </DrawerContainer>
      <DrawerSideways open={isOpen}>
        <ButtonContainer>
          <BackButton>
            <Svg
              src="/static/svg/icon-arrow-back.svg"
              onClick={() => setOpen(false)}
              alt={"arrow-back"}
            />
          </BackButton>
          <DrawerCloseButton />
        </ButtonContainer>
        {category.label && category.title && (
          <ParentLabel>
            <Title>{category.label}</Title>
            <AnchorComponent
              // key={category.id}
              href={shoppingURL(linkAssigner(category))}
              className="anchor-categories"
              style={{
                textDecoration: "none",
                color: "#000000",
              }}
              onClick={() =>
                handleClick(
                  category.label,
                  shoppingURL(linkAssigner(category)),
                  category.order,
                )
              }
            >
              Ver Todo
            </AnchorComponent>
          </ParentLabel>
        )}
        <CategoriesTreeN2 category={category} />
      </DrawerSideways>
    </>
  );
}

const ItemLabel = styled.span`
  font-size: 16px;
  letter-spacing: -0.5px;
  color: #000000;
  white-space: "break-spaces";
`;

function Category({ category }: CategoryProps): JSX.Element {
  const { onClose } = useContext(DrawerContext);
  const { shoppingURL, anchorComponent: AnchorComponent } = useShoppingConfig();
  const [trackEvent] = useTracking();

  const handleClick = (value, path, index) => {
    trackEvent("fvg.header.click-menu-category", {
      value,
      path,
      index,
    });
    onClose();
  };

  switch (category.type) {
    case "MenuSection":
      return <MenuSectionDrawer section={category} />;

    case "SubMenu":
      return <MenuDrawer category={category} />;

    default:
      return (
        <div style={{ margin: "30px 0px" }}>
          <AnchorComponent
            key={category.label}
            href={shoppingURL(linkAssigner(category))}
            className="anchor-categories"
            style={{
              textDecoration: "none",
            }}
            onClick={() =>
              handleClick(
                category.label,
                shoppingURL(linkAssigner(category)),
                category.order,
              )
            }
          >
            <ItemLabel>{category.label}</ItemLabel>
          </AnchorComponent>
        </div>
      );
  }
}

export const DrawerHr = styled(Hr)`
  border-color: #ddd;
`;

function CategoryAssigner({ section }: { section: MenuSection }) {
  if (section?.title) {
    return <Category key={section.label} category={section} />;
  }
  return (
    <>
      {section?.items?.map((item) => (
        <Category key={item.label} category={item} />
      ))}
    </>
  );
}

const Container = styled.div`
  margin: 0px 24px;
`;

export default function CategoriesTreeN2({
  category,
}: {
  category: SubMenu;
}): JSX.Element {
  return (
    <Container>
      {category.sections.map((section) => (
        <section key={section.label}>
          <CategoryAssigner section={section} />
        </section>
      ))}
    </Container>
  );
}
