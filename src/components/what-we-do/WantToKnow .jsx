import { Box, Container } from "@mui/material";
import {
  BannerColor,
  BannerImage,
  BodyText1,
  ButtonStyled,
  Section,
  Title2,
} from "../../pages/how-it-works/styles";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DescriptionIcon from "@mui/icons-material/Description";

function WantToKnow({ text }) {
  return (
    <>
      <Section component={"section"} id="what-to-know">
        <BannerImage
          image={
            text
              ? "/assets/open-transport/want_to_know_background.jpg"
              : "/assets/what-we-do/want_to_know_background.jpg"
          }
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl">
          <Box
            component={"div"}
            sx={{
              maxWidth: "930px",
              width: "100%",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Title2 variant="h2" sx={{ marginBottom: "30px" }}>
              {text
                ? "Want to know the cost of shipping a car with us?"
                : "Want to know the cost of our nationwide auto transport services?"}
            </Title2>
            <BodyText1 variant="subtitle1">
              {text
                ? "Ride in Style with Our Open Carrier Transport - The Perfect Blend of Affordability and Convenience"
                : ` US Car-Go stands out from competitors thanks to its commitment to
              top-notch service and an impressive selection of customizable
              services.`}
            </BodyText1>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              gap: "8px",
              maxWidth: "600px",
              width: "100%",
              margin: "30px auto",
            }}
          >
            <ButtonStyled
              startIcon={<DescriptionIcon />}
              component={"a"}
              href={"#about-form"}
              variant="contained"
              disableRipple
              disableElevation
              sx={{
                transition: "0.1s linear",
                "&:hover": {
                  backgroundColor: "#E01933",
                  opacity: 0.8,
                },
              }}
            >
              Get Instant Quote
            </ButtonStyled>
            <ButtonStyled
              startIcon={<PhoneAndroidIcon />}
              component={"a"}
              href={"tel:+18882498840"}
              variant="contained"
              disableRipple
              disableElevation
              sx={{
                transition: "0.1s linear",
                "&:hover": {
                  backgroundColor: "#E01933",
                  opacity: 0.8,
                },
              }}
            >
              Call At (888) 249-8840
            </ButtonStyled>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default WantToKnow;
