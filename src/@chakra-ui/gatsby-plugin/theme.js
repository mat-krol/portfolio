import { extendTheme } from "@chakra-ui/react";

const theme = {
  components: {
    Button: { baseStyle: { borderRadius: 0 } },
    Input: { baseStyle: { borderRadius: 0 } },
  },
  fonts: {
    heading: "Cabin, sans-serif",
    body: "Open Sans, sans-serif",
  },
};

export default extendTheme(theme);
