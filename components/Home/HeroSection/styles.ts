import styled from "styled-components";

import { devices } from "@/utils/devices";

export const ButtonContainer = styled.div`
  margin-top: 52px;
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

export const HeroSectionContainer = styled.div`
  background-repeat: no-repeat !important;
  background-size: contain !important;
  background: url("/assets/svg/background.svg");
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 89.5rem;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0px);

  @media ${devices.tabletL} {
    background-size: auto !important;
  }
`;
