import { createMuiTheme } from "@material-ui/core/styles";

const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#aed581",
      light: "#e1ffb1",
      dark: "#7da453",
    },
    secondary: {
      main: "#ffb74d",
      light: "#ffe97d",
      dark: "#ca9b52",
    },
  },
  overrides: {
    MuiToolbar: {
      root: {
        justifyContent: "space-between",
      },
    },
  },
});

export default MuiTheme;
