import React from "react";
import "./App.css";
import Posts from "./components/Posts/Posts";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <h1 className="main-heading">Blog App using React Js</h1>
        <Posts />
      </Container>
    </ThemeProvider>
  );
};

export default App;
