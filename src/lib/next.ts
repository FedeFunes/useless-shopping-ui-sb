export interface PseudoNextPageContext {
  req?: { headers: { cookie: string } };
  res?: { setHeader: (name: string, value: string) => unknown };
}
