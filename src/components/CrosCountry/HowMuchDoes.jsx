import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import {
  BannerColor,
  BannerImage,
  Section,
} from "../../pages/how-it-works/styles";

function HowMuchDoes() {
  return (
    <>
      <Section component={"section"} id="how-does-cross">
        <BannerImage
          image={"/assets/how-it-works/what_to_know.jpg"}
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container
          maxWidth="xl"
          sx={{
            overflow: "visible",
            padding: { xs: "0px", sm: "0px", md: "0 24px" },
          }}
        >
          <Box
            component={"ul"}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
              },
            }}
          >
            {" "}
            <Card
              component="li"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: { xs: "10px", sm: "10px", md: "30px" },
                backgroundColor: "transparent",
                boxShadow: "0",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: "100%",
                  maxWidth: "550px",
                  height: "632px",
                  flexGrow: 1,
                  boxShadow:
                    "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                  borderRadius: "35px",
                  overflow: "hidden",
                  backgroundImage: `url(/assets/how-it-works/how_much_does.webp)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Card>
            <Card
              component="li"
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: { xs: "0 10px 10px 10px", sm: "10px", md: "25px" },
                width: "100%",
                boxShadow: "0",
                backgroundColor: "#ffffff00",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: "520px", sm: "900px", md: "500px" },
                  boxShadow:
                    "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                  borderRadius: "35px",
                  padding: 0,
                  overflow: "hidden",
                  backgroundColor: "#11172B",
                }}
              >
                <CardContent sx={{ padding: "30px", width: "100%" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      marginBottom: "30px",
                      fontSize: {
                        xs: "35px",
                        sm: "35px",
                        md: "45px",
                      },
                      fontWeight: 600,
                      lineHeight: "1em",
                      color: "white",
                    }}
                  >
                    How Much Does it Cost to Ship a Car <br />
                    <span style={{ fontWeight: 700, color: "#E01933" }}>
                      Across the Country?
                    </span>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: "1.4em",
                      color: "white",
                    }}
                  >
                    Typically, it costs between $900 and $1,500 for
                    <strong>shipping cross country</strong>. Yet, the
                    aforementioned conditions may cause a wide range of values.
                    Shipping a compact vehicle 1,000 miles on an open trailer
                    may cost as little as $800, while transporting a huge SUV
                    2,000 miles on an enclosed trailer could cost more than
                    $2,000.
                  </Typography>
                  <br />
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: "1.4em",
                      color: "white",
                    }}
                  >
                    It's worth remembering that going with the lowest choice
                    isn't always the greatest move. Selecting a provider
                    primarily on pricing might result in compromised service or
                    inadequate protection.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default HowMuchDoes;
