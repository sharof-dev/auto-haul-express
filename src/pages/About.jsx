import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import "./about.scss";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: 'url(./public/assets/about_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: isMobile ? 'auto' : '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: isMobile ? '20px' : '0',
          textAlign: isMobile ? 'center' : 'left',
          zIndex: -1,
        }}
      >
        <Typography variant={isMobile ? 'h4' : isTablet ? 'h3' : 'h2'}>About Us</Typography>
        <Typography variant={isMobile ? 'body1' : isTablet ? 'h6' : 'h5'}>
          From preschool to pre-tertiary, our students enjoy fun, interactive
          and relevant lessons and are empowered to think beyond the confines of
          the classroom.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
