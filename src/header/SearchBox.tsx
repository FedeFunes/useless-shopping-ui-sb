import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useState,
  useRef,
} from "react";
import styled, { css } from "styled-components";
import { Formik, Form, useFormikContext, useField } from "formik";
import * as yup from "yup";

import Svg from "common/Svg";

import useAutosuggest from "hooks/useAutosuggest";
import type { Suggestions } from "hooks/useAutosuggest";
import useDebounce from "hooks/useDebounce";
import useShoppingConfig from "hooks/useShoppingConfig";
import useRouterContext from "hooks/useContextRouter";
import useTracking from "hooks/useTracking";

import media from "lib/media";
import { fontSizeNormal, fontSizeNormalSmaller } from "lib/theme";

import AutoSuggest, { AutoSuggestWrapper } from "./AutoSuggest";
import Drawer, {
  DrawerCloseButton,
  DrawerHr,
  DrawerSection,
} from "../common/Drawer";

import Results from "./Results";

const InputsSharedStyles = css`
  padding: 0.8em;
  color: #4a4a4a;
`;

const Desktop = styled.div`
  display: contents;

  ${media.lessThan("sm")`
    display: none;
  `}
`;

const SearchInput = styled.input`
  flex-grow: 1;
  ${fontSizeNormalSmaller}
  border: none;
  letter-spacing: -0.5px;
  background-color: #ffffff;
  min-width: 0;
  font-family: "Work Sans", sans-serif;
  ${InputsSharedStyles}

  ${media.greaterThan("sm")`
    ${fontSizeNormal}
  `}

  &:focus {
    outline: none;
    color: #000000;
  }
`;

const SearchField = forwardRef(function SearchFieldd(
  props: {
    name: string;
    type?: string;
    placeholder?: string;
    readOnly?: boolean;
    onFocus?: (e: InputEvent) => void;
    onBlur?: (e: InputEvent) => void;
    onChange?: (e: InputEvent) => void;
  },
  ref: React.Ref<HTMLInputElement>,
) {
  const [field] = useField(props.name);

  const handleChange = useCallback((e) => {
    field.onChange(e);
    props.onChange?.(e);
  }, []);

  return (
    <SearchInput
      {...(field as any)}
      {...props}
      onChange={handleChange}
      ref={ref}
      autoComplete="off"
    />
  );
});

const CheckboxWrapper = styled.div`
  position: relative;
  max-width: 55%;
  padding-left: 15px;
  ${InputsSharedStyles}

  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    height: 80%;
    width: 1px;
    border-left: 1px solid #dadada;

    ${media.lessThan("sm")`
      border-left: none;
    `}
  }

  ${media.lessThan("sm")`
    max-width: 90%;
    padding: 15px 0 15px 1em;
  `}
`;

const Label = styled.label`
  display: block;
  position: relative;
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 0 4px 24px;
  user-select: none;
  cursor: pointer;

  ${media.lessThan("sm")`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    line-clamp: 2;
    padding-left: 30px;
  `}
`;

const CustomCheckbox = styled.span`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 0;
  height: 18px;
  width: 18px;
  border: 1px solid #4a4a4a;
  border-radius: 2px;
  transform: translateY(-50%);

  &:hover {
    background-color: #e5e5e5;
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 33%;
    top: 20%;
    width: 3px;
    height: 6px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;

  &:checked + ${CustomCheckbox} {
    background-color: #440099;
  }

  &:checked + ${CustomCheckbox}:after {
    display: block;
  }
`;

const CategoryCheckbox = forwardRef(function CategoryCheckboxField(props: {
  name: string;
  category?: string;
}) {
  const [field] = useField({ name: props.name, type: "checkbox" });

  return (
    <CheckboxWrapper>
      <Label>
        <HiddenInput {...field} type="checkbox" />
        <CustomCheckbox />
        Solo en {props.category}
      </Label>
    </CheckboxWrapper>
  );
});

const SearchIcon = styled(Svg).attrs({ src: "/static/svg/search-icon.svg" })`
  height: 1.4em;

  ${media.greaterThan("sm")`
    height: 1.25em;
  `}
  path {
    fill: white;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  overflow: hidden;
  z-index: 999;

  border-radius: 4px;
  border: solid 1px #654bb9;
  height: 38px;

  ${media.greaterThan("sm")`
    position: relative;
    height: 44px;
  `}
`;

const SearchFieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;

  min-width: 0;
  max-width: 48em;
  flex-grow: 1;

  ${media.greaterThan("sm")`
    margin: auto;
  `}

  ${AutoSuggestWrapper} {
    visibility: hidden;
    transition: visibility 0s 500ms;
  }

  &:focus-within ${AutoSuggestWrapper} {
    visibility: visible;
  }

  ${media.greaterThan("sm")`
    width: clamp(10em, 100%, 40em);
    margin: auto;
    padding-inline-end: 1em;
  `}
`;

const SearchButton = styled.button`
  display: inline-block;
  height: inherit;
  padding: 0 1.1em;
  cursor: pointer;
  border: none;
  background-color: #654bb9;
  color: white;
  margin: 0;

  ${media.greaterThan("sm")`
    padding: 13px 15px;
  `}
`;

const StyledDrawerSection = styled(DrawerSection)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDrawerResults = styled(DrawerSection)`
  padding-top: 0.3em;
  border-bottom: none;
`;

const AutoSuggestOuterWrapper = styled.div`
  display: none;

  ${media.greaterThan("sm")`
    display: block;
    position: relative;
  `}

  ${AutoSuggestWrapper} {
    top: -4px;
    left: 0;
    right: 0;
  }
`;

const SearchBoxDrawerCloseButton = styled(DrawerCloseButton)`
  position: initial;
  padding: 0 1em;
  margin-inline-start: 1em;
`;

const MobileDrawer = styled(Drawer)`
  ${media.greaterThan("sm")`
    display: none;
  `}
`;

const SearchForm = styled(Form)`
  display: contents;
`;

const SearchSuggestionsContext = createContext<Suggestions>({
  keyword: "",
  didYouMean: [],
  brands: [],
  categories: [],
  items: [],
});

function SearchSuggestionsProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { values } = useFormikContext<{ keyword: string }>();
  const debouncedKeyword = useDebounce(values.keyword, 250);
  const suggestions = useAutosuggest(debouncedKeyword);

  return (
    <SearchSuggestionsContext.Provider value={suggestions}>
      {children}
    </SearchSuggestionsContext.Provider>
  );
}

interface SearchAutoSuggestProps {
  keyboardNavigation?: (e: KeyboardEvent) => void;
}

function SearchAutoSuggest({
  keyboardNavigation,
}: SearchAutoSuggestProps): JSX.Element {
  const { brands, categories, items, keyword, didYouMean } = useContext(
    SearchSuggestionsContext,
  );

  return (
    <AutoSuggest
      brands={brands}
      categories={categories}
      items={items}
      keyword={keyword}
      didYouMean={didYouMean}
      keyboardNavigation={keyboardNavigation}
    />
  );
}

interface AutosuggestProps {
  onSelect?: () => void;
}

function SearchAutoSuggestResults({ onSelect }: AutosuggestProps): JSX.Element {
  const { brands, categories, items, keyword, didYouMean } = useContext(
    SearchSuggestionsContext,
  );

  return (
    <Results
      onSelect={onSelect}
      brands={brands}
      categories={categories}
      items={items}
      keyword={keyword}
      didYouMean={didYouMean}
    />
  );
}

type SearchBoxProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLFieldSetElement>,
  HTMLFieldSetElement
> & {
  searchBoxInitialKeyword?: string;
  context?: string;
  searchByCategory?: { name: string; slug: string };
};

export default forwardRef(function SearchBox(
  { searchBoxInitialKeyword, searchByCategory, ...props }: SearchBoxProps,
  ref: React.Ref<HTMLFieldSetElement>,
): JSX.Element {
  const [trackEvent] = useTracking();
  const { shoppingURL } = useShoppingConfig();
  const { push } = useRouterContext();
  const drawerInputRef = useRef(null);

  const [open, setOpen] = useState(false);
  const openDrawer = useCallback(() => {
    drawerInputRef.current.focus();
    setOpen(true);
  }, []);
  const closeDrawer = useCallback(() => {
    (document?.activeElement as HTMLInputElement)?.blur?.();
    setOpen(false);
  }, []);
  const toggleDrawer = useCallback(() => {
    openDrawer();
  }, []);

  const redirect = useCallback(
    ({ keyword, categoryChecked, searchByCategory }) => {
      const url = categoryChecked
        ? new URL(shoppingURL(`/l/${searchByCategory.slug}/`))
        : new URL(shoppingURL("/l/"));
      url.searchParams.set("keyword", keyword);
      push(url.toString());
      (document?.activeElement as HTMLInputElement)?.blur?.();
      closeDrawer();
      trackEvent("fvg.autosuggest.enter-keyword", {
        keyword,
      });
    },
    [shoppingURL],
  );

  const keyboardNavigation = (e) => {
    if (
      e.key != "ArrowDown" &&
      e.key != "ArrowUp" &&
      e.key != "Escape" &&
      e.key != "Enter"
    )
      return;

    const focused = document?.activeElement as HTMLElement;
    const focusedIndex = Number(focused.dataset.suggestionIndex);

    const suggestions = document.querySelectorAll(
      "input[data-suggestion-index], .outosuggest-outer-wrapper span[data-suggestion-index]",
    );

    const totalSuggestions = suggestions.length - 1;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (focusedIndex < totalSuggestions) {
          (suggestions[focusedIndex + 1] as HTMLElement).focus();
        }
        break;
      case "Enter":
        if (focusedIndex != 0) {
          trackEvent("fvg.didyoumean.click-suggestion", {
            text: focused.textContent,
            keyword: (suggestions[0] as HTMLInputElement).value,
          });
          push((focused.parentElement as HTMLAnchorElement).href);
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (focusedIndex >= 1) {
          (suggestions[focusedIndex - 1] as HTMLElement).focus();
        }
        break;
      case "Escape":
        closeDrawer();
        (suggestions[0] as HTMLElement).focus();
        break;
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        keyword: searchBoxInitialKeyword ?? "",
        categoryChecked: false,
        searchByCategory: searchByCategory ?? {},
      }}
      validationSchema={yup.object({ keyword: yup.string().trim().required() })}
      onSubmit={redirect}
      onReset={closeDrawer}
    >
      <SearchForm>
        <SearchSuggestionsProvider>
          <SearchFieldset {...props} ref={ref}>
            <InputWrapper>
              <SearchField
                name="keyword"
                placeholder="Buscar productos"
                onFocus={openDrawer}
                data-suggestion-index="0"
              />
              {searchByCategory && (
                <Desktop>
                  <CategoryCheckbox
                    name="categoryChecked"
                    category={searchByCategory.name}
                  />
                </Desktop>
              )}

              <SearchButton type="submit">
                <SearchIcon />
              </SearchButton>
            </InputWrapper>

            <AutoSuggestOuterWrapper className="outosuggest-outer-wrapper">
              <SearchAutoSuggest keyboardNavigation={keyboardNavigation} />
            </AutoSuggestOuterWrapper>
          </SearchFieldset>

          <MobileDrawer open={open}>
            <StyledDrawerSection>
              <SearchFieldset>
                <InputWrapper>
                  <SearchField
                    name="keyword"
                    placeholder="Buscar productos en Frávega"
                    onChange={toggleDrawer}
                    ref={drawerInputRef}
                  />

                  <SearchButton type="submit">
                    <SearchIcon />
                  </SearchButton>
                </InputWrapper>
              </SearchFieldset>
              <SearchBoxDrawerCloseButton type="reset" />
            </StyledDrawerSection>
            {searchByCategory && (
              <>
                <CategoryCheckbox
                  name="categoryChecked"
                  category={searchByCategory.name}
                />
                <DrawerHr />
              </>
            )}
            <StyledDrawerResults>
              <SearchAutoSuggestResults onSelect={closeDrawer} />
            </StyledDrawerResults>
          </MobileDrawer>
        </SearchSuggestionsProvider>
      </SearchForm>
    </Formik>
  );
});
