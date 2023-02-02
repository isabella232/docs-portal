import Link from "next/link";
import styled from "styled-components";

import { devices } from "@/utils/devices";
import { Flex, Section } from "@/common/Container/styles";

export const Anchor = styled.a<{ isActive?: boolean }>`
  text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};
  text-underline-position: under;
  transition: text-decoration 0.2s ease-in-out;
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  & > a {
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DesktopMenuContainer = styled.div`
  @media ${devices.desktopL} {
    ${MenuItemsContainer} {
      display: none;
    }
  }
`;

export const LogoContainer = styled(Link)`
  position: relative; ;
`;

export const ButtonContainer = styled.div`
  & > a {
    color: inherit;
    text-decoration: none;
  }

  @media ${devices.desktopL} {
    display: none;
  }
`;

export const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  backdrop-filter: saturate(180%) blur(5px);
  background: hsla(0, 0%, 100%, 0.8);

  @media ${devices.mobileL} {
    position: relative;

    ${Section} {
      padding: 0.5rem 0;
    }
  }
`;

export const HeaderFlex = styled(Flex)`
  @media ${devices.desktopL} {
    flex-direction: row-reverse;
  }
`;
