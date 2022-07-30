import { DefaultTheme } from "styled-components";

import borders from "./borders";
import breakpoints from "./breakpoints";
import { colors, themeColors } from "./colors";
import sizes from "./sizes";
import typography from "./typography";

const appTheme: DefaultTheme = {
  breakpoints,
  transition: {
    slow: "0.4s ease-in-out",
    normal: "0.3s",
    fast: "0.2s",
  },
  opacity: {
    full: "1",
    low: "0.8",
    mid: "0.6",
    high: "0.4",
    zero: "0",
  },
  borders,
  colors,
  themeColors,
  sizes,
  typography,
  rounded: {
    none: "none",
    sm: sizes.common.x1,
    md: sizes.common["x2.5"],
    lg: sizes.common.x4,
    full: "10000px",
  },
  shadows: {
    none: "none",
    regular: `0px 3px 6px 1px ${themeColors.canvasDark}`,
    short: `1px 0px 3px 0px ${themeColors.canvasDark}`,
  },
};

export default appTheme;
