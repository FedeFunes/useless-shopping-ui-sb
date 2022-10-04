import React, { useState, useContext, Dispatch, SetStateAction } from "react";

interface Value {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const ShowMenuCategoryContext = React.createContext<Value>({
  show: false,
  setShow: () => {
    // Do nothing
  },
});

export default function useShowMenuCategory() {
  return useContext(ShowMenuCategoryContext);
}

export function ShowMenuCategoryProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [show, setShow] = useState(false);

  return (
    <ShowMenuCategoryContext.Provider value={{ show, setShow }}>
      {children}
    </ShowMenuCategoryContext.Provider>
  );
}
