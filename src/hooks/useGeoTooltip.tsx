import React, { useState, useContext, useCallback, useRef } from "react";

interface Value {
  isOpen: boolean;
  open: () => unknown;
}

const GeoTooltipContext = React.createContext<Value>({
  isOpen: false,
  open: () => {
    // Do nothing
  },
});

export default function useGeoTooltip(): Value {
  return useContext(GeoTooltipContext);
}

export const GeoTooltipProvider = function ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [isOpen, setGeoTooltipOpen] = useState(false);
  const timeoutRef = useRef<number>();

  const open = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setGeoTooltipOpen(true);
    timeoutRef.current = setTimeout(() => {
      setGeoTooltipOpen(false);
    }, 6000);
  }, []);

  return (
    <GeoTooltipContext.Provider
      value={{
        isOpen,
        open,
      }}
    >
      {children}
    </GeoTooltipContext.Provider>
  );
};
