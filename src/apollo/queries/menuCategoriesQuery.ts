import { gql } from "@apollo/client";

// import menuCategoryFragment from "apollo/fragments/menuCategoryFragment";
// import menuCategoryFieldsFragment from "apollo/fragments/menuCategoryFieldsFragment";

export default gql`
  query categoryMenu($postalCode: String!) {
    categoryMenu(postalCode: $postalCode) {
      ...SubMenuFields
      sections {
        ...MenuSectionFields
        items {
          ... on SimpleText {
            type
            section
            label
            order
          }
          ... on GenericLink {
            type
            href
            section
            label
            logo {
              ...ImageFields
            }
            order
          }
          ... on ListingLink {
            ...ListingLinkField
          }
          ... on LandingLink {
            type
            context
            order
            column
            label
          }
          ... on ModalLink {
            type
            label
            h1
            h2
            h5
            order
          }
          ... on SubMenu {
            ...SubMenuFields
            sections {
              ...MenuSectionFields
              items {
                ... on SimpleText {
                  type
                  section
                  label
                  order
                }
                ... on GenericLink {
                  type
                  href
                  section
                  label
                  order
                  logo {
                    ...ImageFields
                  }
                }
                ... on ListingLink {
                  ...ListingLinkField
                }
                ... on LandingLink {
                  type
                  context
                  order
                  column
                  label
                }
                ... on ModalLink {
                  type
                  label
                  h1
                  h2
                  h5
                }
                ... on SubMenu {
                  ...SubMenuFields
                  sections {
                    ...MenuSectionFields
                    items {
                      ... on SimpleText {
                        type
                        section
                        label
                        order
                      }
                      ... on GenericLink {
                        type
                        href
                        section
                        label
                        order
                        logo {
                          ...ImageFields
                        }
                      }
                      ... on ListingLink {
                        ...ListingLinkField
                      }
                      ... on LandingLink {
                        type
                        context
                        order
                        column
                        label
                      }
                      ... on ModalLink {
                        type
                        label
                        h1
                        h2
                        h5
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  fragment SubMenuFields on SubMenu {
    column
    type
    order
    label
    isOpenMobile
    title {
      ... on SimpleText {
        type
        section
        label
        order
      }
      ... on GenericLink {
        type
        href
        section
        label
        order
        logo {
          ...ImageFields
        }
      }
      ... on ListingLink {
        ...ListingLinkField
      }
      ... on LandingLink {
        type
        context
        order
        column
        label
      }
      ... on ModalLink {
        type
        label
        h1
        h2
        h5
      }
    }
  }

  fragment MenuSectionFields on MenuSection {
    type
    order
    column
    label
    title {
      ... on SimpleText {
        type
        section
        label
        order
      }
      ... on GenericLink {
        type
        href
        section
        label
        order
        logo {
          ...ImageFields
        }
      }
      ... on ListingLink {
        ...ListingLinkField
      }
      ... on LandingLink {
        type
        context
        order
        column
        label
      }
      ... on ModalLink {
        type
        label
        h1
        h2
        h5
      }
    }
  }

  fragment ImageFields on Image {
    label
    href
    isShowedDesktop
    logo
  }

  fragment ListingLinkField on ListingLink {
    type
    label
    order
    filtering {
      ids
      skus
      keywords {
        query
        searchType
        operator
        fuzzy
      }
      brands
      categories
      collections
      sellers
      attributes {
        values {
          valueKey: key
          values
        }
        ranges {
          valueKey: key
          min
          max
        }
      }
      salePriceAmount {
        min
        max
      }
      salePriceDiscount {
        min
        max
      }
      availableStock {
        locations
        postalCodes
        types
        costs
        deliveryTerms
        includeThoseWithNoAvailableStockButListable
      }
      installments
    }
    section
    logo {
      ...ImageFields
    }
  }
`;
