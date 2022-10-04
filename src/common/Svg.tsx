import React, { forwardRef } from "react";
import type { DetailedHTMLProps, ImgHTMLAttributes, Ref } from "react";

import IconChevron from "icons/Chevron";
import IconChevronRight from "icons/ChevronRight";
import IconChevronDown from "icons/ChevronDown";
import IconIg from "icons/IconIg";
import IconFb from "icons/IconFb";
import IconIn from "icons/IconIn";
import IconTw from "icons/IconTw";
import IconYt from "icons/IconYt";
import IconClose from "icons/IconClose";
import IconHamburger from "icons/IconHamburger";
import IconFastTruck from "icons/IconFastTruck";
import IconCog from "icons/IconCog";
import IconUser from "icons/IconUser";
import IconShoppingCart from "icons/IconShoppingCart";
import IconBranchStore from "icons/IconBranchStore";
import IconRingingPhone from "icons/IconRingingPhone";
import IconChatBubble from "icons/IconChatBubble";
import FravegaCreditsLogo from "icons/FravegaCreditsLogo";
import FravegaTravelLogo from "icons/FravegaTravelLogo";
import FravegaLogo from "icons/FravegaLogo";
import FravegaIcon from "icons/FravegaIcon";
import SearchIcon from "icons/SearchIcon";
import IconWrenchOutlined from "icons/IconWrenchOutlined";
import IconBranchStoreOutlined from "icons/IconBranchStoreOutlined";
import IconChatBubbleOutlined from "icons/IconChatBubbleOutlined";
import IconMarker from "icons/IconMarker";
import IconCheck from "icons/IconCheck";
import IconCheckCircle from "icons/IconCheckCircle";
import IconWarningCircle from "icons/IconWarningCircle";
import IconOutlineCart from "icons/IconOutlineCart";
import IconOffice from "icons/IconOffice";
import IconBox from "icons/IconBox";
import IconFastTruckLarge from "icons/IconFastTruckLarge";
import IconLoader from "icons/IconLoader";
import IconArrowBack from "icons/IconArrowBack";
import IconCloseDrawer from "icons/IconCloseDrawer";
import BurguerMenu from "icons/BurguerMenu";

const registeredSvgs = {
  "/static/svg/burguer-menu.svg": BurguerMenu,
  "/static/svg/icon-loader.svg": IconLoader,
  "/static/svg/icon-chevron.svg": IconChevron,
  "/static/svg/icon-chevron-right.svg": IconChevronRight,
  "/static/svg/icon-chevron-down.svg": IconChevronDown,
  "/static/svg/icon-arrow-back.svg": IconArrowBack,
  "/static/svg/icon-fb.svg": IconFb,
  "/static/svg/icon-ig.svg": IconIg,
  "/static/svg/icon-yt.svg": IconYt,
  "/static/svg/icon-tw.svg": IconTw,
  "/static/svg/icon-in.svg": IconIn,
  "/static/svg/fast-truck.svg": IconFastTruck,
  "/static/svg/cog.svg": IconCog,
  "/static/svg/user.svg": IconUser,
  "/static/svg/icon-shopping-cart.svg": IconShoppingCart,
  "/static/svg/icon-wrench-outlined.svg": IconWrenchOutlined,
  "/static/svg/branch-store-filled.svg": IconBranchStore,
  "/static/svg/branch-store-outlined.svg": IconBranchStoreOutlined,
  "/static/svg/ringing-phone.svg": IconRingingPhone,
  "/static/svg/icon-chat-bubble.svg": IconChatBubble,
  "/static/svg/icon-chat-bubble-outlined.svg": IconChatBubbleOutlined,
  "/static/svg/fravega-credits.svg": FravegaCreditsLogo,
  "/static/svg/fravega-travel.svg": FravegaTravelLogo,
  "/static/svg/fravega-logo.svg": FravegaLogo,
  "/static/svg/fravega-icon.svg": FravegaIcon,
  "/static/svg/search-icon.svg": SearchIcon,
  "/static/svg/close.svg": IconClose,
  "/static/svg/close-mobile.svg": IconCloseDrawer,
  "/static/svg/icon-hamburger.svg": IconHamburger,
  "/static/svg/icon-marker.svg": IconMarker,
  "/static/svg/icon-check.svg": IconCheck,
  "/static/svg/icon-check-circle.svg": IconCheckCircle,
  "/static/svg/icon-alert-circle.svg": IconWarningCircle,
  "/static/svg/icon-outline-cart.svg": IconOutlineCart,
  "/static/svg/icon-office.svg": IconOffice,
  "/static/svg/icon-box.svg": IconBox,
  "/static/svg/icon-fast-truck-large.svg": IconFastTruckLarge,
};

export default forwardRef(function Svg(
  {
    src,
    style,
    ...rest
  }: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  ref: Ref<HTMLImageElement>,
): JSX.Element {
  const Fallback = registeredSvgs[src];
  if (Fallback) return <Fallback style={{ ...style }} {...rest} ref={ref} />;

  return <img src={src} style={{ ...style }} {...rest} ref={ref} />;
});
