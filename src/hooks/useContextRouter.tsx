import React, { createContext, useContext, useMemo } from "react";

interface Router {
  push: (href: string) => void;
}

interface RouterContextProps {
  children: React.ReactNode;
  router: { push: (href: string) => void };
}

const RouterContext = createContext<Router>({
  push: (href: string) => window.location.assign(href),
});

export function RouterContextProvider({
  children,
  router,
}: RouterContextProps): JSX.Element {
  const _router = useMemo(
    () => router ?? { push: (href) => window.location.assign(href) },
    [router],
  );

  return (
    <RouterContext.Provider value={_router}>{children}</RouterContext.Provider>
  );
}

export default function useRouterContext(): Router {
  return useContext(RouterContext);
}
