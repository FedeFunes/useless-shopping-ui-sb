export function getCookie(name: string, cookies = ""): string {
  const match = new RegExp(`(^| )${name}=([^;]+)`).exec(cookies);
  return match && match[2];
}
