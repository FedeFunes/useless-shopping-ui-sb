import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import Svg from "common/Svg";

import useMenuCategories from "hooks/useMenuCategories";

import linkAssigner from "../../helpers/linkAssigner";

import useShoppingConfig from "hooks/useShoppingConfig";

import { DrawerCloseButton, DrawerContext, DrawerSection } from "common/Drawer";

import CategoryModal from "../categories-menu/ModalCategory";
import CategoriesTreeN2 from "./CategoriesTreeN2";
import useTracking from "hooks/useTracking";

import {
  // MenuItem,
  MenuItemUnion,
  MenuSection,
  SubMenu,
} from "header/categories-menu/types";
import DrawerSideways from "./DrawerSideways";

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
  const { open: parentOpen } = useContext(DrawerContext);
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
                fontSize: "16px",
                textDecoration: "none",
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
            <Category key={item.id} category={item} />
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

  const handleClick = (value, path, index) => {
    trackEvent("fvg.header.click-menu-category", {
      value,
      path,
      index,
    });
    onClose();
  };

  useEffect(() => {
    if (!parentOpen) {
      setOpen(false);
    }
  }, [parentOpen]);

  const isOpen = open && parentOpen;
  if (category.isOpenMobile) {
    return (
      <>
        {category.sections.map((section) =>
          section.items.map((item) => (
            <Category key={item.id} category={item} />
          )),
        )}
      </>
    );
  }
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
              key={category.label}
              href={shoppingURL(linkAssigner(category))}
              className="anchor-categories"
              style={{
                textDecoration: "none",
                fontSize: "16px",
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
              Ver Todos
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
  const { shoppingURL, anchorComponent: AnchorComponent } = useShoppingConfig();
  const { onClose } = useContext(DrawerContext);
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

    case "ModalLink":
      return (
        <div style={{ margin: "32px 0px" }}>
          <CategoryModal item={category} />
        </div>
      );

    default:
      return (
        <div style={{ margin: "32px 0px" }}>
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
            {category.logo?.href && (
              <img
                style={{ margin: "0px 4px", width: "20px" }}
                src={category.logo.href}
              />
            )}
            <ItemLabel>{category.label}</ItemLabel>
          </AnchorComponent>
        </div>
      );
  }
}

export const DrawerHr = styled(Hr)`
  border-color: #ddd;
`;

export default function CategoriesMobile(): JSX.Element {
  const { categoryMenu, loading } = useMenuCategories();

  if (loading) {
    return <> </>;
  }

  return <CategoriesTreeN1 category={categoryMenu} />;
}

function CategoryAssigner({
  section,
  index,
}: {
  section: MenuSection;
  index: number;
}) {
  if (index !== 0) {
    return null;
  }

  if (section?.title) {
    return <Category key={section.id} category={section} />;
  }
  return (
    <>
      {section?.items.map((item) => (
        <Category key={item.id} category={item} />
      ))}
    </>
  );
}

const Container = styled.div`
  margin: 0px 24px;
  section:last-child {
    border-bottom: none;
  }
`;

const StyledDrawerSection = styled(DrawerSection)`
  padding: 0px;
`;

function CategoriesTreeN1({ category }: { category: SubMenu }): JSX.Element {
  return (
    <Container>
      {category?.sections?.map((section, index) => (
        <StyledDrawerSection key={section.id}>
          <CategoryAssigner section={section} index={index} />
        </StyledDrawerSection>
      ))}
    </Container>
  );
}
