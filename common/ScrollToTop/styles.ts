import styled from "styled-components";

import { devices } from "@/utils/devices";
import { COLOR_GREEN } from "@/utils/colorPalette";

export const ScrollUpContainer = styled.div<{ show: boolean }>`
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 100;
  cursor: pointer;
  background-color: ${COLOR_GREEN};
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  visibility: ${(p) => (p.show ? "visible" : "hidden")};
  opacity: ${(p) => (p.show ? "1" : "0")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.32);
  }

  @media ${devices.desktopL} {
    display: none;
  }
`;
