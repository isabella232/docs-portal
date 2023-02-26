import styled from "styled-components";

import { devices } from "@/utils/devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  h1 {
    font-size: 48px;
    font-weight: 400;
  }

  h2 {
    font-size: 42px;
    font-weight: 400;
  }

  @media ${devices.tabletL} {
    line-height: 50.4px;
  }

  @media ${devices.mobileL} {
    h1 {
      font-size: 40px;
      line-height: 42px;
    }

    h2 {
      font-size: 35px;
      line-height: 40px;
    }
  }
`;

export const Description = styled.p`
  font-size: 25px;
  font-weight: 400;
  line-height: 37.5px;

  p {
    white-space: pre-wrap;
  }

  @media ${devices.tabletL} {
    font-size: 20px;
    line-height: 30px;
  }

  @media ${devices.mobileL} {
    font-size: 18px;
    line-height: 27px;
  }
`;
