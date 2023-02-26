import styled from "styled-components";

import { devices } from "@/utils/devices";
import { Flex, Section } from "@/common/Container/styles";
import { COLOR_BLACK, COLOR_GREEN } from "@/utils/colorPalette";
import { LogoContainer } from "@/common/Layout/Header/styles";

export const Tooltip = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  padding: 0.8rem 1rem;
  border-radius: 40px;
  font-size: 0.8rem;
  opacity: 0;
  pointer-events: none;
  text-transform: uppercase;
  transform: translate(-50%, -100%);
  transition: all 0.3s ease;
  background: ${COLOR_GREEN};
  color: ${COLOR_BLACK};
  z-index: 1;

  &:after {
    display: block;
    position: absolute;
    bottom: 1px;
    left: 50%;
    width: 0;
    height: 0;
    content: "";
    border: solid;
    border-width: 10px 10px 0 10px;
    border-color: transparent;
    border-top-color: ${COLOR_GREEN};
    transform: translate(-50%, 100%);
  }
`;

export const SocialsContainer = styled.div<{
  hideLogo?: boolean;
}>`
  display: flex;
  gap: 38.25px;

  a {
    position: relative;

    &:hover {
      ${Tooltip} {
        visibility: visible;
        opacity: 1;
        transform: translate(-50%, -150%);
      }
    }
  }

  @media ${devices.desktopL} {
    gap: 0;

    a {
      border-left: 1px solid ${COLOR_BLACK};
      padding: 15px 20px;

      &:last-child {
        padding-right: ${({ hideLogo }) => (hideLogo ? "20px" : "0")};
      }
    }
  }
`;

export const FlexContainer = styled(Flex)<{
  hideLogo?: boolean;
}>`
  /* justify-content: ${({ hideLogo }) => (hideLogo ? "right" : "")};
  align-items: ${({ hideLogo }) => (hideLogo ? "flex-end" : "")}; */

  @media ${devices.mobileL} {
    flex-direction: column;
    align-items: flex-start;
    gap: 5.125rem;
  }

  @media ${devices.desktopL} {
    justify-content: right;
    align-items: flex-end;
  }
`;

export const FooterWrapper = styled.footer<{
  hideLogo?: boolean;
}>`
  margin-top: ${({ hideLogo }) => (hideLogo ? "auto" : "")};

  ${Section} {
    border-bottom: 0;

    @media ${devices.desktopL} {
      padding: 0;
    }

    @media ${devices.mobileL} {
      margin-left: 0;
    }
  }

  @media ${devices.tabletL} {
    position: relative;

    &:before {
      top: 0;
      left: -100vw;
      position: absolute;
      content: "";
      width: 200vw;
      height: 2px;
      background-color: ${COLOR_BLACK};
    }
  }

  @media ${devices.desktopL} {
    ${LogoContainer} {
      display: none;
    }

    ${Section} {
      width: 100vw;
    }
  }

  @media ${devices.mobileL} {
    ${Section} {
      padding: 0;
    }
  }
`;
