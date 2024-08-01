import { BodyText1, Section, Title2 } from "../../pages/how-it-works/styles";
import { Box, Container, Grid, Typography } from "@mui/material";
import HowGetCard from "./cards/HowGetCard";

const howGetCardData = [
  {
    icon: "/assets/how-it-works/svg/location.svg",
    title: "Pickup and Delivery Locations",
  },
  {
    icon: "/assets/how-it-works/svg/crash-car.svg",
    title: "Type of Vehicle and Its Dimensions",
  },
  {
    icon: "/assets/how-it-works/svg/norm-car.svg",
    title: "Method of Transportation Preferred",
  },
  {
    icon: "/assets/how-it-works/svg/date.svg",
    title: "Date of Transportation",
  },
];

function HowGet() {
  return (
    <>
      <Section component={"section"} id="want-to">
        <Container maxWidth="xl">
          <Box
            component={"div"}
            sx={{
              width: "100%",
              margin: "0 auto",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <Title2 variant="h2" color={"#11172B"}>
              How to Get a Quote for <br />
              <Box component="span" sx={{ color: "#E01933" }}>
                Shipping Car Across Country
              </Box>
            </Title2>
            <BodyText1
              variant="subtitle1"
              color={"#7A7A7A"}
              sx={{ marginTop: "10px" }}
            >
              Getting an accurate{" "}
              <Box
                component={"a"}
                href={"#"}
                sx={{ textDecoration: "none", color: "#7A7A7A" }}
              >
                <strong>quote to ship</strong>
              </Box>
              , a car depends on the following information:
            </BodyText1>
          </Box>

          <Grid
            container
            justifyContent="center"
            columnSpacing={2}
            rowSpacing={1}
            sx={{ padding: "20px 0" }}
          >
            {howGetCardData.map((card, idx) => (
              <HowGetCard {...card} key={idx} />
            ))}
          </Grid>

          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                marginTop: "10px",
                fontSize: "18px",
                fontWeight: "500",
                textAlign: "center",
                color: "#7A7A7A",
              }}
            >
              A price from the shipping business will be based on the details
              you supply. It is smart to inquire about any extra expenses that
              may be incurred, such those for insurance or rush delivery.
            </Typography>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default HowGet;
