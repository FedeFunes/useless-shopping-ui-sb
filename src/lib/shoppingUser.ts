import { getCookie } from "./cookie";
import { PseudoNextPageContext } from "./next";

const COOKIE_NAME = "checkout.vtex.com";

/**
 * Gets user token from cookie
 *
 * @param {NextPageContext} ctx
 */
export default function getUserToken(
  ctx?: PseudoNextPageContext,
): string | undefined {
  const token = getCookie(
    COOKIE_NAME,
    ctx?.req?.headers.cookie ?? global.document?.cookie,
  );
  const parsedCookie = getCookie("__ofid", token);
  return parsedCookie;
}
