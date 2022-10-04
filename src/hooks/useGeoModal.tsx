import React, { useState, useContext, Dispatch, SetStateAction } from "react";

interface Value {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const GeoModalContext = React.createContext<Value>({
  isOpen: false,
  setOpen: () => {
    // Do nothing
  },
});

export default function useGeoModal() {
  return useContext(GeoModalContext);
}

export function GeoModalProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  return (
    <GeoModalContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </GeoModalContext.Provider>
  );
}
