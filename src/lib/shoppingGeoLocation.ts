import { encode, decode } from "./base64";
import { getCookie } from "./cookie";
import { PseudoNextPageContext } from "./next";

export interface ShoppingGeoLocation {
  id: string;
  number: string;
  location: {
    id: number;
    name: string;
  };
  region: string;
}

const COOKIE_NAME = "geoPostalCode";

function parse(str: string): unknown {
  try {
    return str && JSON.parse(decode(str));
  } catch (err) {
    return [];
  }
}

function stringify(obj: unknown): string {
  return obj && encode(JSON.stringify(obj));
}

/**
 * Sets geo cookie with the given location
 *
 * @param {ShoppingGeoLocation} location
 * @param {NextPageContext} ctx
 */
export function setGeoLocation(
  location: ShoppingGeoLocation | ShoppingGeoLocation[],
  ctx?: PseudoNextPageContext,
): void {
  const cookieValue = `${stringify(
    [].concat(location),
  )};domain=fravega.com;path=/;secure;SameSite=Lax;Expires=Fri,1 Jan 2100 00:00:00 GMT`;
  //const cookieValue = `${stringify(location)};Expires=Fri,1 Jan 2100 00:00:00 GMT`;

  if (ctx && ctx.res) {
    ctx.res.setHeader(COOKIE_NAME, cookieValue);
  } else if (typeof document) {
    document.cookie = `${COOKIE_NAME}=${cookieValue}`;
  } else {
    throw new Error("Unable to set cookie");
  }
}

function isShoppingGeoLocation(location: ShoppingGeoLocation): boolean {
  return (
    location &&
    typeof location === "object" &&
    typeof location.region === "string" &&
    typeof location.number === "string"
  );
}

/**
 * Gets the geo location from cookie
 *
 * @param {NextPageContext} ctx
 */
export function getGeoLocation(
  ctx?: PseudoNextPageContext,
): ShoppingGeoLocation | null {
  const parsedCookieGeoLocation = parse(
    getCookie(COOKIE_NAME, ctx?.req?.headers.cookie ?? global.document?.cookie),
  );

  if (
    Array.isArray(parsedCookieGeoLocation) &&
    parsedCookieGeoLocation.every((location) => isShoppingGeoLocation(location))
  )
    return parsedCookieGeoLocation[0];

  if (isShoppingGeoLocation(parsedCookieGeoLocation as never))
    return parsedCookieGeoLocation as never;

  return null;
}

export function getDefaultGeoLocation() {
  return {
    id: "C1406",
    number: "1406",
    location: {
      id: 2,
      name: "Capital Federal",
    },
    region: "Capital Federal",
  };
}
