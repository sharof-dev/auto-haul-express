import React from "react";
import { Box, Stack, Typography, styled } from "@mui/material";
import "./about.scss";

const About = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: 'url(./public/assets/about_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography>About Us</Typography>
        <Typography>
          From preschool to pre-tertiary, our students enjoy fun, interactive
          and relevant lessons and are empowered to think beyond the confines of
          the classroom.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
