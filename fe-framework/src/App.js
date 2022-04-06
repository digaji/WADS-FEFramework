import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function SignInPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* App bar */}
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            A sign in Form
          </Typography>
          <Avatar
            sx={{ mr: 1 }}
            src="/static/kucing1.png"
            alt="Kucing Avatar"
          />
          <Typography variant="h6" component="div">
            Featuring: Kucing
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        {/* Sign in form */}
        <Fade in timeout={2000}>
          <Box
            sx={{
              marginTop: 25,
              padding: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid white",
              borderRadius: "5px",
            }}
          >
            <Avatar
              sx={{ m: 1, border: "0.1px solid white" }}
              src="/static/Kucing2.png"
              alt="Kucing Logo"
            />
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box component="form" noValidate sx={{ m: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 17 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Fade>
      </Container>
      {/* Bottom bar */}
      <Box
        sx={{
          marginTop: 25,
          height: "25vh",
          backgroundColor: "#9acffa",
        }}
      ></Box>
    </ThemeProvider>
  );
}
