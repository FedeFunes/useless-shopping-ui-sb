# 0.5.5

- Add: Center GeoModal

# 0.5.4

- Feature: Keyboard navigation
- Add: Track Autosuggest and DidYouMean events

# 0.5.3

- Fix: geo tooltip not opening

# 0.5.2

- Renamed exported functions:
  - getGeolocation => getGeoLocation
  - setGeolocation => setGeoLocation
  - getDefaultGeolocation => getDefaultGeoLocation
- Added: initialGeoLocation to ShoppingContextProvider

# 0.5.0

- Feature: DidYouMean

# 0.4.54

- Fix: Cart mutation

# 0.4.53

- Fix: Cart styles

# 0.4.52

- Feature: Increase and Decrease item quantity in cart
- Added: Tracking Modal Geo

# 0.4.51

- Feature: Geo default functionality

# 0.4.50

- Fix: autosuggest Safari

# 0.4.47

- Fix: searchbox initial value reinitialize

# 0.4.46

s

- Added: searchBoxInitialKeyword prop to Header
- Update: green color changed for web accesibility
- Fix: Change place repeteance button
- Fix: searchbox clickable area

# 0.4.44

- Fix: Close modal onSelect view more in bar links

# 0.4.43

- Update: Footer styles
- Added: Link club movistar
- Fix: Heading structure
- Fix: dont allow spaces in geoForm

# 0.4.39

- Fix: Close modal onSelect view more in category tree

# 0.4.36

- Fix: desync between keyword and suggestions while loading them on searchbox
- Updated: Fravega autosuggest api

# 0.4.35

- Styles changes
- Fix: cart link
- Fix: AutoSuggest suggestions limit to 10 products
- Others: Bug fixing to header y footer integration

# 0.4.30

- Added: context prop to Footer component to determinate which links should render
- Fix: AutoSuggest suggestions going blank while tipping

# 0.4.19

- Added: Next Router and Link support

# 0.4.15

- Added: functionality geoCheckout cookie
- Fixes: Search box errors
- Added: Modal Geo

# 0.4.8

-Added: Classnames to SearchBox components

# 0.4.7

-Updated: Header styles
-Fix: input search box
-Fix: remove disableBodyScroll in drawer desktop

# 0.4.6

-Updated: Header and Cart styles
-Fix: TooltipModalResponsive close functionality

# 0.4.4

-Updated: Header styles
-Fix: Pricing in cart

# 0.4.1

-Updated: Header styles
-Updated: Geo mobile styles

# 0.3.6

- Updated: css cart styles
- Fix: margin in button iphone/safari
- Fix: paddings in footers collapsing with other apps.

# 0.3.5

- Added: `featuresFravegaSearchSuggestions` option to `ShoppingContextProvider`

# 0.3.4

- Removed: chevron from menu categories mobile
- Fix: Header geo now displays province name

# 0.3.3

- Added: styled-component css mixins:
  - fontSizeSmallest
  - fontSizeSmaller
  - fontSizeSmall
  - fontSizeNormal
  - fontSizeBig
  - fontSizeBigger
  - fontSizeBiggest
  - fontWeightLight
  - fontWeightNormal
  - fontWeightBold
  - fontWeightBolder
- Added: check icon & view more link to mobile drawer categories tree
- Removed: header desktop shopping cart label.
- Updated: elements z-index
- Updated: searchbox text color
- Updated: search icon svg

# 0.3.2

- Fix: useGeoForm callback dependencies.
- Fix: cart styles (item images, remove min-width mobile).
- Fix: mutation parameters remove items in cart.
- Added: reset helper to useGeoForm hook.
- Added: getGeoLocation & setGeoLocation helpers

# 0.3.1

- Fix: useShoppingGeoLocation didn't update when a new zip code was submitted by the user.
- Fix: repentance button is now only shown on shopping's home page.
- Fix: header's geo form now shows correctly error messages for invalid postal code and connection error.
- Fix: hook useGeoForm now exposes error codes.
- Updated: css styles.

# 0.3.0

- Breaking: ShoppingContextProvider is now required.
- Breaking: updated ShoppingContextProvider props.
  - Removed: shoppingApiURL prop to ShoppingContextProvider.
  - Added: apolloClient prop to ShoppingContextProvider.
  - Added: shoppingURL prop to ShoppingContextProvider.
  - Added: imagesURL prop to ShoppingContextProvider.
  - Added: track prop to ShoppingContextProvider.
  - Added: initialGeoDialogOpen prop to ShoppingContextProvider.
- Added: useShoppingGeoLocation hook.
- Added: useGeoForm hook.
- Added: useTracking hook.
- Updated: css styles.
