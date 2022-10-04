import React, { createContext, useCallback, useContext } from "react";

export type TrackingFunction = (
  evtName: string,
  payload: Record<string, unknown>,
) => unknown;

const TrackingContext = createContext<TrackingFunction>(() => {
  /* do nothing */
});

interface TrackingProviderProps {
  track: TrackingFunction;
  children: React.ReactNode;
}

export function TrackingProvider({
  track,
  children,
}: TrackingProviderProps): JSX.Element {
  return (
    <TrackingContext.Provider value={track}>
      {children}
    </TrackingContext.Provider>
  );
}

export default function useTracking(
  evtName?: string,
  payload?: Record<string, unknown>,
): [TrackingFunction] {
  const trackingFunction = useContext(TrackingContext);

  const track = useCallback(
    (_evtName, _payload) =>
      trackingFunction &&
      trackingFunction(_evtName ?? evtName, _payload ?? payload),
    [evtName, payload],
  );

  return [track];
}
