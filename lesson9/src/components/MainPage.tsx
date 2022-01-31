import React from "react";
import { Stack, Typography } from "@mui/material";

function MainPage() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ p: 20 }}
    >
      <Typography variant="h3" align="center" sx={{ my: 5 }}>
        React Router v6
      </Typography>

      <Typography variant="h6">
        This app is designed to teach you the basics react route v.6
      </Typography>
    </Stack>
  );
}

export default MainPage;
