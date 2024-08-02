import { Box, Container } from "@mui/material";
import {
  BannerColor,
  BannerImage,
  Section,
} from "../../pages/how-it-works/styles";
import SliderCard from "./cards/SliderCard";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CircleIcon from "@mui/icons-material/Circle";

const sliderData = [
  {
    img: "/assets/how-it-works/faq_slider0.webp",
    title: "What is Car Transport?",
    text: `
    Car transport
     is a service that helps people move their cars from one place to another. It is a service that many car dealerships, car manufacturers, and people who need to move their cars over long distances use. Companies that move cars use special trucks, trailers, and carriers to get the job done quickly and safely.
    `,
  },
  {
    img: "/assets/how-it-works/faq_slider1.webp",

    title: "How do I get is car transport quote?",
    text: (
      <>
        Car transport companies give different car shipping quotes based on the
        distance, type of transport, and other factors. So, the best way to get
        a quote that fits your needs is to answer all the questions on the{" "}
        <Box
          component={"a"}
          href="#"
          sx={{
            textDecoration: "none",
            color: "#fff",
            "&:hover": {
              color: "#E01933",
            },
          }}
        >
          "Get a quote"
        </Box>{" "}
        page about your transport.
      </>
    ),
  },
  {
    img: "/assets/how-it-works/faq_slider2.png",
    title: "Overview of the auto transport industry",
    text: `
   The auto transport industry is an important part of the transportation industry. It offers a variety of services to move cars from one place to another. Over the past few years, the industry has grown a lot, and that growth is expected to continue because more and more people need services to move cars.
    `,
  },
  {
    img: "/assets/how-it-works/faq_slider3.webp",
    title: "Calculating my car shipping estimate and auto shipper math",
    text: (
      <>
        Getting an <strong>estimate of shipping costs</strong> with auto-shipper
        math is pretty easy. But you need to know how it works and figure out
        the distance between where you pick up and where you drop off, the type
        of transport, the size and weight of your vehicle, and any extra fees.
      </>
    ),
  },
];

function WhatFactors() {
  return (
    <>
      <Section component={"section"} id="what-factors">
        {/* Banner Image */}
        <BannerImage
          image={"/assets/how-it-works/costs.jpg"}
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl">
          <VerticalTimeline
            animate={"true"}
            lineColor={"#E01933"}
            style={{ boxShadow: "none", border: "0" }}
          >
            {sliderData.map((card, idx) => (
              <VerticalTimelineElement
                date="Distance of the Transport"
                iconStyle={{ background: "#E01933", color: "#fff" }}
                icon={<CircleIcon />}
                key={idx}
              >
                <SliderCard {...card} />
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Container>
      </Section>
    </>
  );
}

export default WhatFactors;
