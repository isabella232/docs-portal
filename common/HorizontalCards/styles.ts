import styled from "styled-components";

import { devices } from "@/utils/devices";
import { COLOR_BLACK, COLOR_GRAY } from "@/utils/colorPalette";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 27px;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 3.25rem;

  @media ${devices.mobileL} {
    margin-top: 1.75rem;
  }
`;

export const CardWrapper = styled.div<{ backgroundImage?: string }>`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 31px 22px 23px 22px;
  border-radius: 18px;
  max-width: 297px;
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${COLOR_GRAY};

  &:hover {
    border: 1px solid transparent;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  @media ${devices.tabletM} {
    max-width: 100%;
  }
`;

export const Anchor = styled.a`
  height: 100%;
  display: grid;
  text-decoration: none;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 20px;
  color: ${COLOR_BLACK};
  font-weight: 400;
`;
