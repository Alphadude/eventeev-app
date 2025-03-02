import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        custom: {
          bg: "#EB5017",
          color: "white",
          _hover: { bg: "#d44210" },
          fontSize: "16px",
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
