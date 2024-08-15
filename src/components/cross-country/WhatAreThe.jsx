import {
  BannerColor,
  BannerImage,
  Section,
  Title2,
} from "../../pages/how-it-works/styles";
import { Box, Container, useMediaQuery } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useTheme } from "@emotion/react";
import AdjustIcon from "@mui/icons-material/Adjust";
import SliderCard from "../car-shipping-cost/cards/SliderCard";


function WhatAreThe({ data }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xl"));
  const separate = (num) => {
    if (num % 2) {
      return "left";
    }
    return "right";
  };

  return (
    <>
      <Section component={"section"} id="what-are-the">
        {/* Banner Image */}
        <BannerImage
          image={"/assets/how-it-works/what_are_the.jpg"}
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl">
          <Title2
            variant="h4"
            sx={{
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            What Are the Factors to Consider <br />
            <Box component="span" sx={{ color: "#E01933" }}>
              When Shipping a Car?
            </Box>
          </Title2>
          <VerticalTimeline
            layout={"2-columns"}
            animate={true}
            lineColor={"#E01933"}
            style={{ boxShadow: "none", border: "0" }}
          >
            {data.map((card, idx) => (
              <VerticalTimelineElement
                style={{ marginTop: `${matches ? "50px" : "20px"}` }}
                date={matches ? null : card.title}
                iconStyle={{ background: "#E01933", color: "#fff" }}
                icon={<AdjustIcon />}
                key={idx}
                position={separate(idx)}
              >
                <SliderCard
                  {...card}
                  dark={"true"}
                  timeline={"true"}
                  matches={matches}
                />
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Container>
      </Section>
    </>
  );
}

export default WhatAreThe;
