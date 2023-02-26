import { createGlobalStyle } from "styled-components";

import { GroteskRegular } from "@/public/assets/fonts/fonts";
import {
  COLOR_BLACK,
  COLOR_DARK_BLUE,
  COLOR_WHITE_LIGHT,
} from "@/utils/colorPalette";

export const GlobalStyle = createGlobalStyle`
    body {
      margin:0;
      padding:0;
      border: 0;
      outline: 0;
      overflow-x: hidden;
      color: ${COLOR_BLACK};
      background-size: auto;
      background-color: ${COLOR_WHITE_LIGHT};
      font-family: ${GroteskRegular.style.fontFamily};
    }

    * {
      box-sizing: border-box;
      border: 0 solid;
    }
    
    html {
      scroll-behavior: smooth;
    }

    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    h1, h2, h3, h4, h5, p {
      margin: 0;
    }

    a, button {
      font-family: ${GroteskRegular.style.fontFamily};
      font-size: 18px;
    }

    p {
      color: ${COLOR_DARK_BLUE};
      line-height: 27px;
    }
`;
