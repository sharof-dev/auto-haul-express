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
import CircleIcon from "@mui/icons-material/Circle";
import SliderCard from "../car-shipping-cost/cards/SliderCard";
const VerticalTimelineText = styled(VerticalTimeline)(({ theme }) => ({
  '&:before': {
    top: '8% !important',
    height: '84% !important',
  }
}))

const sliderData = [
  {
    img: "/assets/how-it-works/what_are_the_card0.webp",
    title: "Level of Expertise",
    text: `
   You probably want to maintain your car in top shape since it represents a considerable financial investment. Whatever your shipping needs are, US Car-G0 can handle them. Every day, we carry dozens of automobiles for our clients, and we treat each one with the utmost respect.
    `,
  },
  {
    img: "/assets/how-it-works/what_are_the_card1.webp",
    title: "Shipping Timing",
    text: `
     Yet, not all companies that provide interstate shipping live up to their claims of speed. We at US Car-G0 understand how crucial it is for you to get your car on schedule, and we work tirelessly to make that a reality. Your car will arrive on time since we have planned the best route and taken into account weather and traffic.`,
  },
  {
    img: "/assets/how-it-works/what_are_the_card2.jpg",
    title: "Flexibility and Reliability",
    text: `
   We understand that the cost of cross country vehicle transport  may be significant, and we work hard to provide you with competitive rates and premium services. US Car-G0 only employs trained professionals that are properly geared to transport your car. They will keep your car safe and on schedule. When you need something, we have it.
    `,
  },
  {
    img: "/assets/how-it-works/what_are_the_card3.webp",
    title: "Transport Option",
    text: (
      <>
        When shipping with US Car-G0, you may choose between an
        <Box
          component={"a"}
          href={"#"}
          target="_blank"
          sx={{ textDecoration: "none", color: "#11172B" }}
        >
          open carrier trailer
        </Box>
        and a fully
        <Box
          component={"a"}
          href={"#"}
          target="_blank"
          sx={{ textDecoration: "none", color: "#11172B" }}
        >
          enclosed carrier truck . If you need to ship your automobile but are
          on a tight budget, open carriers are an option to explore. If you need
          to ship a vintage or luxury vehicle, however, you should do it in an
          enclosed carrier.
        </Box>
      </>
    ),
  },
];

function WhatAreThe({whyChooseData, text}) {
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
      <Section component={"section"} id="what-factors">
        {/* Banner Image */}
        <BannerImage
          image={text ? '' : "/assets/how-it-works/costs.jpg"}
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={text ? '' : "linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl">
          {text ? (<Typography variant="h2" textAlign={'center'} mb={10} fontWeight={600}>
            Why choose <span style={{ color: '#e01933' }}>Us Car-Go</span>
          </Typography>) : ""}

          {text ? (
            <VerticalTimelineText
              animate="true"
              lineColor={"#E01933"}
              style={{ boxShadow: "none", border: "0" }}
            >

              {whyChooseData.map((card, idx) => (
                <VerticalTimelineElement
                  dateClassName="vertical-timeline-element-date"
                  date={card.title}
                  iconStyle={{ background: "#E01933", color: "#fff" }}
                  icon={<RadioButtonCheckedIcon />}
                  key={idx}
                >
                  <SliderCard {...card} />
                </VerticalTimelineElement>
              ))}
            </VerticalTimelineText>
          ) : (
            <VerticalTimeline
              animate="true"
              lineColor={"#E01933"}
              style={{ boxShadow: "none", border: "0" }}
            >

              {sliderData.map((card, idx) => (
                <VerticalTimelineElement
                  date="Distance of the Transport"
                  iconStyle={{ background: "#E01933", color: "#fff" }}
                  icon={<RadioButtonCheckedIcon />}
                  key={idx}
                >
                  <SliderCard {...card} textin={text} />
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          )}

        </Container>
      </Section>
    </>
  );
}

export default WhatAreThe;
