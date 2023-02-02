import styled from "styled-components";

import { devices } from "@/utils/devices";

export const ButtonContainer = styled.div`
  display: none;

  @media ${devices.tabletM} {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 25px;

    & button {
      width: 100%;
      min-width: 100%;
    }
  }
`;
