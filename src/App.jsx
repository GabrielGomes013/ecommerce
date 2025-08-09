import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";

const themeDefault = createTheme({
  palette: {
    primary: {
      main: "#000000ff",
    },
    secondary: {
      main: "#ff0000ff",
    },
  },
});

function App() {
  return <ThemeProvider theme={themeDefault}></ThemeProvider>;
}

export default App;
