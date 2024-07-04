import React from "react";
import { Container, Typography } from "@mui/material";
import "../pages/about.scss";

const About = () => {
  return (
    <Container>
      <Container className="container-first">
        <Typography>About Us</Typography>
        <Typography>
          From preschool to pre-tertiary, our students enjoy fun, interactive
          and relevant lessons and are empowered to think beyond the confines of
          the classroom.
        </Typography>
      </Container>
    </Container>
  );
};

export default About;
