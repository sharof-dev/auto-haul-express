import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PolicyIcon from "@mui/icons-material/Policy";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { styled } from "@mui/system";
import {
  BannerColor,
  BannerImage,
  Section,
} from "../../pages/how-it-works/styles";

<<<<<<< HEAD
// Styled components
const CircleContainer = styled('div')({
  position: 'relative',
  width: '600px',
  height: '600px',
  borderRadius: '50%',
  border: '1px solid silver',
  margin: '0 auto',
  marginTop: '100px',
  marginBottom: '150px',
  maxWidth: '600px',
=======
const CircleContainer = styled("div")({
  position: "relative",
  width: "500px",
  height: "500px",
  borderRadius: "50%",
  border: "1px solid #ddd",
  margin: "0 auto",
  marginTop: "50px",
  marginBottom: "150px",
  maxWidth: "600px",
>>>>>>> behruz
});

const ServiceItem = styled("div")(({ top, left, backgroundColor }) => ({
  position: "absolute",
  width: "150px",
  height: "150px",
  backgroundColor: backgroundColor || "#0D1B2A",
  color: "white",
  borderRadius: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "10px",
  top: top,
  left: left,
  transform: "translate(-50%, -50%)",
}));

const HighlightedSpan = styled("span")({
  color: "#e01933",
});

const services = [
  {
    icon: <PeopleIcon style={{ fontSize: 30, color: "white" }} />,
    title: "Thousands of Trusted Clients",
    top: "0%",
    left: "50%",
    backgroundColor: "#0D1B2A",
  },
  {
    icon: <FormatQuoteIcon style={{ fontSize: 30, color: "white" }} />,
    title: "Instant Quote",
    top: "35%",
    left: "95%",
    backgroundColor: "#D62828",
  },
  {
    icon: <PolicyIcon style={{ fontSize: 30, color: "white" }} />,
    title: "Insurance Coverage",
    top: "75%",
    left: "90%",
    backgroundColor: "#0D1B2A",
  },
  {
    icon: <DirectionsBusIcon style={{ fontSize: 30, color: "white" }} />,
    title: "Personalized Services",
    top: "98%",
    left: "50%",
    backgroundColor: "#0D1B2A",
  },
  {
    icon: <AttachMoneyIcon style={{ fontSize: 30, color: "white" }} />,
    title: "Affordable Services",
    top: "75%",
    left: "5%",
    backgroundColor: "#0D1B2A",
  },
  {
    icon: <SupportAgentIcon style={{ fontSize: 30, color: "white" }} />,
    title: "Customer Support",
    top: "35%",
    left: "3%",
    backgroundColor: "#0D1B2A",
  },
];

function App({ background, backgroundColor, title, text }) {
  return (
    <>
      <Section>
        {background && (
          <>
            <BannerImage
              image={background}
              parallax={"true"}
              component={"div"}
            />
            {/* Banner Color */}
            <BannerColor
              color={
                backgroundColor
                  ? backgroundColor
                  : "linear-gradient(180deg, #11172b 40%, #11172B 100%)"
              }
            />
          </>
        )}
        <Container
          maxWidth="lg"
          style={{ textAlign: "center", marginTop: title ? "0" : "50px" }}
        >
<<<<<<< HEAD
          {title ? title : <>What Makes <HighlightedSpan>Us Different?</HighlightedSpan></>}
        </Typography>
        <Typography variant="h5" color={"silver"}>
          {text ? text : <>Affordable, reliable, experienced - the pillars of our <strong>auto shipping services</strong></>}
        </Typography>
        <CircleContainer>
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              top={service.top}
              left={service.left}
              backgroundColor={service.backgroundColor}
              isActive={activeServiceId === service.id}
              onMouseEnter={() => setActiveServiceId(service.id)}
            >
              {service.icon}
              <Typography variant="body1">{service.title}</Typography>
            </ServiceItem>
          ))}
          <Box
            position="absolute"
            top="40%"
            left="20%"
            transform="translate(-50%, -50%)"
            width="60%"
            textAlign="center"
            zIndex="0"
            display={'grid'}
            placeItems="center"
=======
          <Typography
            variant="h2"
            fontWeight={600}
            sx={{ color: background ? "#fff" : "#11172B" }}
>>>>>>> behruz
          >
            {title ? (
              title
            ) : (
              <>
                What Makes <HighlightedSpan>Us Different?</HighlightedSpan>
              </>
            )}
          </Typography>
          <Typography variant="h5" color={"silver"}>
            {text ? (
              text
            ) : (
              <>
                Affordable, reliable, experienced - the pillars of our{" "}
                <strong>auto shipping services</strong>
              </>
            )}
          </Typography>
          <CircleContainer sx={{ mt: 30 }}>
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                top={service.top}
                left={service.left}
                backgroundColor={service.backgroundColor}
              >
                {service.icon}
                <Typography variant="body1">{service.title}</Typography>
              </ServiceItem>
            ))}
            <Box
              position="absolute"
              top="40%"
              left="20%"
              transform="translate(-50%, -50%)"
              width="60%"
              textAlign="center"
            >
              <Typography
                variant="body1"
                style={{ color: background ? "#fff" : "#0D1B2A" }}
              >
                Get an instant quote for our top-notch vehicle shipping
                services, providing hassle-free and efficient transport with a
                focus on affordability, safety, reliability, and competitive
                pricing.
              </Typography>
            </Box>
          </CircleContainer>
        </Container>
      </Section>
    </>
  );
}

export default App;
