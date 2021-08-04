import { createCss } from "@stitches/react";

export const { styled, getCssString } = createCss({
  theme: {
    fonts: {
      system: "Spartan",
    },
    colors: {
      1: "#17FFC4",
      2: "#CC17FF",
      3: "#6917D0",
      4: "#6917D0",
      5: "#17FFEE",
    },
    fontSizes: {
      1: "16px",
      2: "20px",
      3: "28px",
    },
  },
});
