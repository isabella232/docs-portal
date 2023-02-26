import styled from "styled-components";

import { devices } from "@/utils/devices";
import { COLOR_DARK_BLUE, COLOR_WHITE_LIGHT } from "@/utils/colorPalette";

export const AnimateSlideBurger = styled.div`
  &.burgerslide-transition-enter-active {
    transform: none;
    -webkit-transform: none;
    -moz-transform: none;
    transition: transform 0.5s ease;
    -webkit-transition: -webkit-transform 0.5s ease;
    -moz-transition: -moz-transform 0.5s ease;
  }
  &.burgerslide-transition-exit {
    transform: none;
    -webkit-transform: none;
    -moz-transform: none;
  }
  &.burgerslide-transition-exit-active {
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    transition: transform 0.5s ease;
    -webkit-transition: -webkit-transform 0.5s ease;
    -moz-transition: -moz-transform 0.5s ease;
  }
`;

export const BurgerSidebarWrapper = styled(AnimateSlideBurger)`
  width: 36vw;
  height: 100%;
  display: block;
  top: 0;
  right: 0;
  position: absolute;

  @media ${devices.macBookPro} {
    width: 55vw;
  }

  @media ${devices.tabletL} {
    width: 100vw;
  }
`;

export const BurgerSidebarOverlay = styled.div<{
  shouldShow: boolean;
}>`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 999;
  visibility: ${(p) => (p.shouldShow ? "visible" : "hidden")};
  opacity: ${(p) => (p.shouldShow ? 1 : 0)};
  transition: visibility 0.45s cubic-bezier(0.8, 0, 0.2, 1),
    opacity 0.4s cubic-bezier(0.8, 0, 0.2, 1);
`;

export const BurgerSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  background-color: ${COLOR_WHITE_LIGHT};
  width: 100%;
  height: 100vh;
  padding: 1.5rem 3.375rem 0rem 3.375rem;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 3px 3px 25px ${COLOR_DARK_BLUE};
  gap: 1.5rem;

  @media ${devices.tabletM} {
    padding: 2.09375rem 3.375rem 0 2rem;
  }

  @media ${devices.mobileL} {
    max-width: 100vw;
    padding: 1rem 2rem 0 2rem;
  }
`;
