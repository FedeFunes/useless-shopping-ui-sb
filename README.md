# shopping-ui-components

Shopping ui components library based on styled-components

## Table of contents

- [Installation](#Installation)
  - [Local Instalation](#Local-instalation)
- [Usage](#Usage)
  - [Environment Variables](#Environment-Variables)
  - [Advanced Usage](#Advanced-Usage)
  - [NextJs](#NextJs)
  - [Tracking](#Tracking)
- [Development](#Development)
  - [How to contribute](#How-to-contribute)
- [Demo](#Demo)
- [Change log](./CHANGELOG.md)

## Installation

- Conect to Fravega's VPN

- Login to nexus registry

```bash
npm login --registry=https://nexus.management.fravega.com/repository/npm-all/
```

- Install library

```bash
npm i @fvg/shopping-ui-components --registry=https://nexus.management.fravega.com/repository/npm-all/
```

### CI

- In order to gitlab-ci be able to pull from nexus registry it needs credentials. For this, a custom node image is provided. Use it as your starting point of your dockerfile.

```dockerfile
FROM registry.gitlab.com/fravega-it/arquitectura/gitlab-runner-node:12.14.0
```

- For more info about this custom node image, and other versions, [reefer to it's documentation](https://gitlab.com/fravega-it/arquitectura/gitlab-runner-node)
  <br><br>

### Local Instalation

To install a local version instead of the published one:

1. Create a `.tgz` file from the library:

```bash
npm pack
```

It will copy the pack to the current working directory as `<name>-<version>.tgz`.  
e.g.: `fvg-shopping-ui-components-<version>.tgz`.
<br><br>

2. Copy the `.tgz` to your preferred location in your app.  
   e.g.: `./temp/fvg-shopping-ui-components-<version>.tgz`
   <br><br>

3. Change the instalation path in your `package.json` to the `.tgz` file you just copied.  
   e.g.: `"@fvg/shopping-ui-components": "file:./temp/fvg-shopping-ui-components-<version>.tgz",`
   <br><br>

4. Install

```bash
npm i @fvg/shopping-ui-components
```

<br><br>

## Usage

- You need to have work sans font in your document. Add the next link to your document:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700"
/>
```

- To add shopping's header and footer components:

```jsx
import {
  ShoppingContextProvider,
  Header,
  Footer,
} from "@fvg/shopping-ui-components";

export default function MainPage() {
  return (
    <ShoppingContextProvider
      shoppingURL="https://shopping.development.fravega.com/"
      imagesURL="https://images2.development.fravega.com/"
    >
      <Header />
      <div>my page content</div>
      <Footer />
    </ShoppingContextProvider>
  );
}
```

### Environment variables

- Shopping context should be configured according to runtime environment

|               | Development                                 | Production                    |
| :------------ | :------------------------------------------ | :---------------------------- |
| `shoppingURL` | `https://shopping.development.fravega.com/` | `https://www.fravega.com/`    |
| `imagesURL`   | `https://images2.development.fravega.com/`  | `https://images.fravega.com/` |

### Advanced usage

- Alternatively you can provide your own apollo context that can accept shopping apis queries.
  This is useful for testing or if you already have your own apollo client in your app.

```jsx
import {
  ShoppingContextProvider,
  Header,
  Footer,
} from "@fvg/shopping-ui-components";

export default function MainPage() {
  return (
    <ShoppingContextProvider
      apolloClient={myApolloClient}
      shoppingURL="https://shopping.development.fravega.com/"
      imagesURL="https://images2.development.fravega.com/"
    >
      <Header />
      <div>my page content</div>
      <Footer />
    </ShoppingContextProvider>
  );
}
```

### NextJs

- If you are using next.js is recommended that you execute some queries server-side to improve load times. An utility function is provided to abstract this operations.

```jsx
// pages/_app.js
import { Header, Footer } from "@fvg/shopping-ui-components";
import { useApollo } from "../lib/apolloClient";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ShoppingContextProvider
      apolloClient={apolloClient}
      shoppingURL="https://shopping.development.fravega.com/"
      imagesURL="https://images2.development.fravega.com/"
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ShoppingContextProvider>
  );
}
```

```jsx
// pages/my-page.jsx
import { serverSideQueries } from "@fvg/shopping-ui-components";

export default function MyPage({ Component, pageProps }) {
  return (
    <>
      <h1>My awesome content</h1>
    </>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await serverSideQueries(apolloClient);

  // All your other queries

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}
```

- For more information checkout [this example from vercel](https://github.com/vercel/next.js/tree/canary/examples/with-apollo)

### Tracking

- This library also provides you with a way to track elements even inside components, this is useful to delegate the use of a tracking function to the library itself, even then you STILL have to create the tracking function you have to use

```jsx
import {
  ShoppingContextProvider,
  Header,
  Footer,
} from "@fvg/shopping-ui-components";

function myTrackingFunction(evtName, payload) {
  window.dataLayer.push({ name: evtName, payload });
}

export default function Layout({ children }) {
  return (
    <ShoppingContextProvider
      shoppingURL="https://shopping.development.fravega.com/"
      imagesURL="https://images2.development.fravega.com/"
      track={myTrackingFunction}
    >
      <Header />
      {children}
      <Footer />
    </ShoppingContextProvider>
  );
}
```

```jsx
import { useTracking } from "@fvg/shopping-ui-components";

export default function MyPage() {
  const [trackingFunction] = useTracking();

  const handleEvent = () => {
    trackingFunction("fvg.myApp.myEvtName", {
      myPayload: "myPayload",
    }); // Here you put your own id and payload
  };

  //OR

  const [trackingFunction] = useTracking("fvg.myApp.myEvtName", {
    myPayload: "myPayload",
  }); // Here you put your own id and payload

  const handleEvent = () => {
    trackingFunction();
  };

  return <Button onClick={handleEvent}>my page content</Button>;
}
```

#### Built-in events

- This library has some built-in tracking for some interactions.

| Id                                       | Payload             | Description                                                                            |
| ---------------------------------------- | ------------------- | -------------------------------------------------------------------------------------- |
| `fvg.header.click-open-modal-cp`         | `undefined`         | Triggers when the geo tooltip is opened by the user                                    |
| `fvg.header.click-close-modal-cp`        | `undefined`         | Triggers when the geo tooltip is closed by the user                                    |
| `fvg.modalSpu.click-save-cp`             | `{ cp: string }`    | Triggers when a postal code is submitted in the geo tooltip by the user                |
| `fvg.modalSpu.click-save-unavailable-cp` | `{ cp: string }`    | Triggers when a submitted postal code is not recognized in the geo tooltip by the user |
| `userLoggedIn`                           | `{ email: string }` | Triggers when a user is detected via cookies                                           |

### Geo Location

- You can hook up to the geo location context provided by the header

```jsx
import { useShoppingGeoLocation } from "@fvg/shopping-ui-components";

export default function MyPage() {
  const [
    {
      id,
      number,
      location: { id: locationId, name: locationName },
      region,
    },
  ] = useShoppingGeoLocation();

  return (
    <p>
      id: {id}
      <br />
      number: {number}
      <br />
      locationId: {locationId}
      <br />
      locationName: {locationName}
      <br />
      region: {region}
      <br />
    </p>
  );
}
```

## Development

- Install dependencies

```bash
npm i
```

- Run storybook

```bash
npm run storybook
```

### How to contribute

- Start from the most up to date version

```bash
git checkout develop
git pull origin develop
```

- Create a branch according to the type of your contribution.

```bash
git checkout -b <feature|fix>/<your-feature-name>
```

- Recommended: add a storybook's story to showcase your feature.

- Add to changelog the modifications you made in the current in development version.

- Once you are happy [submit a pull request](https://gitlab.com/fravega-it/shopping/shopping-ui-components/-/merge_requests/new)

## Demo

- Check out the [storybook demo](http://shopping-ui-components.development.fravega.com/)
