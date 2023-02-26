import styled from "styled-components";

import {
  COLOR_BLACK,
  COLOR_GRAY,
  COLOR_GREEN,
  COLOR_WHITE_LIGHT,
} from "@/utils/colorPalette";

export const Container = styled.button<{
  variant: string;
}>`
  padding: 16px 30px;
  min-width: 199px;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: ${({ variant }) =>
    variant === "primary" ? COLOR_BLACK : COLOR_BLACK};
  background-color: ${({ variant }) =>
    variant === "primary" ? COLOR_GREEN : COLOR_WHITE_LIGHT};
  border: ${({ variant }) =>
    variant === "primary" ? "none" : `1px solid ${COLOR_GRAY}`};
  box-shadow: ${({ variant }) =>
    variant === "primary"
      ? "0 4px 14px 0 rgb(0 0 0 / 30%)"
      : "0 4px 14px 0 rgb(0 0 0 / 10%)"};
  transition: background.2s ease, color.2s ease, box-shadow.2s ease;

  &:hover {
    box-shadow: ${({ variant }) =>
      variant === "primary"
        ? "0 6px 20px rgb(0 0 0 / 30%)"
        : "0 6px 20px rgb(0 0 0 / 15%)"};
    background-color: ${({ variant }) =>
      variant === "primary" ? "" : "rgba(255,255,255,.9)"};
  }
`;

export const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  max-width: max-content;
  width: 100%;
`;
