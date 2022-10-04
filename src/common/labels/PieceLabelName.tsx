import React from "react";
import Svg from "common/Svg";

interface Props {
  label: string;
}

export default function PieceLabelName({ label }: Props): JSX.Element {
  switch (label) {
    case "FREE_HOME_DELIVERY":
      return (
        <span>
          Envío <b>GRATIS</b>
        </span>
      );
    case "FREE_HOME_DELIVERY_IN_0_HOURS":
      return (
        <>
          <Svg src="/static/svg/fast-truck.svg" alt={"truck"} />
          <span>
            <b> Llega GRATIS hoy </b>
          </span>
        </>
      );
    case "FREE_HOME_DELIVERY_IN_24_HOURS":
      return (
        <span>
          Llega <b>GRATIS</b> mañana
        </span>
      );
    case "HOME_DELIVERY_IN_24_HOURS_SAME_DAY":
      return <span>Llega mañana</span>;
    case "FREE_HOME_DELIVERY_IN_24_HOURS_SAME_DAY":
      return (
        <span>
          Llega <b>GRATIS</b> mañana
        </span>
      );
    case "FREE_HOME_DELIVERY_IN_48_HOURS":
      return (
        <span>
          Llega <b>GRATIS</b> en 48hs{" "}
        </span>
      );
    case "HOME_DELIVERY_IN_0_HOURS":
      return (
        <>
          <Svg src="/static/svg/fast-truck.svg" alt={"truck"} />
          <span>
            {" "}
            <b> Llega hoy </b>
          </span>{" "}
        </>
      );
    case "HOME_DELIVERY_IN_24_HOURS":
      return <span>Envío en 24hs</span>;
    case "HOME_DELIVERY_IN_48_HOURS":
      return <span>Envío en 48hs</span>;
    case "IMMEDIATE_PICKUP":
      return <span>Retiralo YA!</span>;
    case "PICKUP_IN_24_HOURS":
      return <span>Retiro en 24hs</span>;
    case "PICKUP_IN_48_HOURS":
      return <span>Retiro en 48hs</span>;
    default:
      return <>{label}</>;
  }
}
