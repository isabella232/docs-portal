import Image from "next/image";
import styled from "styled-components";

import { devices } from "@/utils/devices";
import { MenuItemsContainer } from "@/common/Layout/Header/styles";
import { COLOR_BLACK, COLOR_WHITE_LIGHT } from "@/utils/colorPalette";
import { Flex } from "@/common/Container/styles";

export const NavigationPrimary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;

  ${MenuItemsContainer} {
    flex-direction: column;
    gap: 4.5rem;
    width: 100%;
    align-items: flex-start;

    @media ${devices.desktopL} {
      gap: 3rem;
    }

    & > a {
      position: relative;
      text-decoration: none;

      &:after {
        bottom: -25px;
        left: -100vw;
        position: absolute;
        content: "";
        width: 200vw;
        height: 2px;
        background-color: ${COLOR_BLACK};
      }
    }
  }

  div > p,
  button {
    font-size: 30px;

    @media ${devices.desktopM} {
      font-size: 24px;
    }

    @media ${devices.mobileL} {
      line-height: 140%;
    }
  }

  div > p {
    color: ${COLOR_WHITE_LIGHT};

    &:before {
      bottom: -10px;
    }
  }
`;

export const PointerImage = styled(Image)`
  cursor: pointer;
`;

export const BurgerMenuContainer = styled.div`
  display: none;

  @media ${devices.desktopL} {
    display: block;
  }
`;

export const BurgerSidebarFlex = styled(Flex)`
  margin-bottom: 2rem;
  position: relative;

  &:after {
    bottom: -25px;
    left: -100vw;
    position: absolute;
    content: "";
    width: 200vw;
    height: 2px;
    background-color: ${COLOR_BLACK};
  }
`;
