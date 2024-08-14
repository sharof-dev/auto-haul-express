import { Heading, Section, Title4 } from "../../pages/how-it-works/styles";
import { Box, Container, useMediaQuery } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useTheme } from "@emotion/react";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import SliderCard from "../car-shipping-cost/cards/SliderCard";

const sliderData = [
  {
    img: "/assets/what-we-do/our_service_progress_slider0.webp",
    title: "Contact Us",
    text: `
  Begin the process by reaching out to our dedicated team at US Car-Go Freight. You can easily contact us through the provided contact information on our website. Whether you prefer a phone call or sending us an email, our friendly customer service representatives are ready to assist you and answer any initial inquiries you may have.
    `,
  },
  {
    img: "https://uscargofreight.com/wp-content/uploads/2023/05/Get-Quote-US-Car-Go-Img.jpg.webp",
    title: "Get A Quote",
    text: `
    Once you have contacted us, our team will guide you through the process of obtaining a quote. US Car-Go Freight Logistics understand the importance of transparent pricing, and we strive to provide competitive rates tailored to your specific shipping needs. By providing relevant information about your vehicle and desired transportation requirements, we will generate a comprehensive quote for your consideration.`,
  },
  {
    img: "/assets/what-we-do/our_service_progress_slider2.webp",
    title: "Schedule Pick-up",
    text: `
 After reviewing the quote and deciding to proceed with our services, the next step is to schedule a pick-up for your vehicle. Our team will work closely with you to determine the most convenient date and time for pick-up, ensuring it aligns with your availability. We value punctuality and aim to accommodate your schedule as efficiently as possible.
    `,
  },
  {
    img: "/assets/what-we-do/our_service_progress_slider3.webp",
    title: "Verification Call",
    text: `
      Prior to the scheduled pick-up, we will initiate a verification call to confirm the details of the transport. This call allows us to reconfirm important information, such as the pick-up location, delivery address, and any specific instructions or preferences you may have. US Car-Go Freight Logistics LLC value clear communication to ensure a smooth and hassle-free experience for you.
    `,
  },
  {
    img: "/assets/what-we-do/our_service_progress_slider4.webp",
    title: "Vehicle Pick-up",
    text: `
      On the scheduled date and time, our experienced and professional drivers will arrive at the designated pick-up location. They will carefully inspect your vehicle and document its condition before loading it onto the transport carrier. Our team is trained to handle vehicles with utmost care, ensuring that your valuable asset is secured and protected throughout the loading process.
    `,
  },
  {
    img: "/assets/what-we-do/our_service_progress_slider5.webp",
    title: "Vehicle in Transit",
    text: `
     Once your vehicle is loaded onto the carrier, it will begin its journey to the designated destination. Throughout the transit, we provide regular updates, allowing you to track the progress of your vehicle. We maintain constant communication with our drivers, ensuring a timely and efficient delivery of your vehicle.
    `,
  },
  {
    img: "/assets/what-we-do/our_service_progress_slider6.webp",
    title: "Vehicle Delivery",
    text: `
    Upon arrival at the destination, our team will carefully unload your vehicle from the carrier. We prioritize a thorough inspection to verify that the vehicle has been delivered in the same condition as when it was picked up. Our commitment to quality ensures that your vehicle is handled with the utmost care and arrives at its destination safely.
    `,
  },
  {
    img: "/assets/how-it-works/what_are_the_card0.webp",
    title: "Payment",
    text: `
  To conclude the service process, we require payment for the transportation services rendered. We offer various convenient payment methods to suit your preferences. Our team will guide you through the payment process, ensuring a seamless and secure transaction.
    `,
  },
];

function OurServiceProgress() {
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
        <Container maxWidth="xl">
          <Box component={"div"} sx={{ marginBottom: "30px" }}>
            <Heading
              variant="h4"
              color={"#11172B"}
              sx={{
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Our Service{" "}
              <Box component="span" sx={{ color: "#E01933" }}>
                Process.
              </Box>
            </Heading>
            <Title4
              variant="h4"
              textcolor={"#7A7A7A"}
              sx={{ margin: "10px 0px", fontWeight: 500, textAlign: "center" }}
            >
              Look no further than US Car-Go Freight! Our team of seasoned
              professionals is dedicated to crafting custom shipping solutions
              tailored to your specific requirements. We offer a range of
              services, from door-to-door to expedited, and can accommodate both
              enclosed and open auto transport. Plus, with our expedited and
              standard delivery options, you can get your vehicles where they
              need to go on your timeline.
            </Title4>
            <Title4
              variant="h4"
              textcolor={"#7A7A7A"}
              sx={{ margin: "10px 0px", fontWeight: 500, textAlign: "center" }}
            >
              Here's how the process of moving your vehicle with us works:
            </Title4>
          </Box>
          <VerticalTimeline
            layout={"2-columns"}
            animate={true}
            lineColor={"#E01933"}
            style={{ boxShadow: "none", border: "0" }}
          >
            {sliderData.map((card, idx) => (
              <VerticalTimelineElement
                style={{ marginTop: `${matches ? "50px" : "20px"}` }}
                date={matches ? null : card.title}
                iconStyle={{ background: "#E01933", color: "#fff" }}
                icon={<TripOriginIcon />}
                key={idx}
                position={separate(idx)}
              >
                <SliderCard
                  {...card}
                  // dark={"true"}
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

export default OurServiceProgress;
