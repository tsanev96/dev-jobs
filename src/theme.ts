import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 375,
      sm: 600,
      md: 768,
      lg: 1280,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: "#f3f3f3",
    },
  },
});
