import React from "react";
import "./App.css";
import Posts from "./components/Posts/Posts";
import DrawerAppBar from "./components/navbar";
import Landing from "./pages/Landing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

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
        <DrawerAppBar />
        <Landing />
        <Typography variant="h3" sx={{ marginTop: 10 }}>
          Blog App using React Js
        </Typography>
        <Posts />
      </Container>
    </ThemeProvider>
  );
};

export default App;
