import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import GetQuote from "../GetQuote";

const MainSection = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://uscargofreight.com/wp-content/uploads/2023/04/Home-Page-Bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 0",
        color: 'white'
      }}
    >
      <Container maxWidth='xl'>
        <Grid container spacing="2">
          {/* Left section */}
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h2" gutterBottom>
                Welcome to USCarGoFreight
              </Typography>
              <Typography variant="body1">
                USCarGoFreight is a professional, independent auto hauling
                company that specializes in door-to-door and classic car
                transportation. Our team of experienced drivers and truck
                drivers will help you find the best route and time for your
                transport needs.
              </Typography>
            </Box>
          </Grid>

          {/* Right section */}
          <Grid item xs={12} sm={6}>
            <GetQuote />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainSection;
