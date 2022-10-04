/**
 * Decodes a base64 encoded string
 *
 * @param {String} str base64 string to decode
 */
export function decode(str: string): string {
  return (
    (typeof window === "object" &&
      typeof window.atob === "function" &&
      window.atob(str)) ||
    Buffer.from(str, "base64").toString("binary")
  );
}

/**
 * Encodes to base64 any given string
 *
 * @param {String} str any string
 */
export function encode(str: string): string {
  return (
    (typeof window === "object" &&
      typeof window.btoa === "function" &&
      window.btoa(str)) ||
    Buffer.from(str, "binary").toString("base64")
  );
}
