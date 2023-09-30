import React, { useState } from "react";
import {
  CssBaseline,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  createTheme,
  ThemeProvider,
  Box
} from "@mui/material";
import backgroundImage from "assets/images/wallpaper.png";
import useSignInStore from "store/api/signIn";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#003459"
    }
  }
});

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { signIn, user } = useSignInStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signIn(formData.email, formData.password);

    if (user) {
      console.log("User signed in:", user.username);
    } else {
      console.log("Sign-in failed");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "100vh",
          backgroundSize: "cover"
        }}>
        <Box sx={{ pt: "24rem", pr: "4rem", pl: "55rem" }}>
          <Paper
            elevation={4}
            style={{ padding: "1.25rem", background: "rgba(255, 255, 255, 0.8)" }}>
            <Typography variant="h4" align="right" fontWeight="bold" mb="1rem">
              Hey there!
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "20px" }}>
                Log In
              </Button>
            </form>

            {user && (
              <div>
                <p>Signed in as: {user.username}</p>
              </div>
            )}
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
