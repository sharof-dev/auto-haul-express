import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  BannerColor,
  BannerImage,
  Section,
} from "../../pages/how-it-works/styles";
import { useNavigate } from "react-router-dom";

function EnclosedAuto() {
  const navigate = useNavigate();
  return (
    <>
      <Section component={"section"} id="enclosed-auto">
        <BannerImage
          image={"/assets/what-we-do/enclosed_auto.jpg"}
          parallax={"true"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl">
          {" "}
          <Box
            component={"ul"}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: {
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
              },
            }}
          >
            {" "}
            <Card
              component="li"
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: { xs: "0 10px 10px 10px", sm: "10px", md: "15px" },
                width: "100%",
                boxShadow: "0",
                backgroundColor: "#ffffff00",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: "520px", sm: "900px", md: "578px" },
                  boxShadow:
                    "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                  borderRadius: "35px",
                  padding: 0,
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <CardContent
                  sx={{ padding: "15px 25px 0px 25px", width: "100%" }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      marginBottom: "10px",
                      fontSize: {
                        xs: "35px",
                        sm: "35px",
                        md: "45px",
                      },
                      fontWeight: 600,
                      lineHeight: "1em",
                      color: "#11172B",
                    }}
                    onClick={() => navigate("/enclosed-auto-transport")}
                  >
                    Open Auto Transport
                    <Box
                      component={"span"}
                      sx={{ fontWeight: 700, color: "#E01933" }}
                    >
                      .
                    </Box>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "18.5px",
                      fontWeight: 500,
                      lineHeight: "1.4em",
                      color: "#7A7A7A",
                    }}
                  >
                    With US Car-Go's enclosed carriers, your vehicle enjoys
                    unparalleled protection and peace of mind during
                    transportation. Our fully enclosed trailers shield your
                    valuable asset from all external elements throughout the
                    entire journey. Whether it's harsh weather, dust, or debris,
                    your vehicle remains safeguarded within a secure and
                    enclosed environment. Enclosed carriers are ideal for
                    luxury, vintage, and sports cars, or any vehicle requiring
                    an extra layer of protection. Choose US Car-go for the
                    utmost peace of mind during auto transport.
                  </Typography>

                  <IconButton
                    sx={{ background: "#E01933", marginTop: "10px" }}
                    onClick={() => navigate("/open-auto-transport")}
                    disableRipple
                  >
                    <ArrowForwardIosIcon sx={{ color: "#fff" }} />
                  </IconButton>
                </CardContent>
              </Box>
            </Card>
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
                  maxWidth: "373px",
                  height: "403px",
                  flexGrow: 1,
                  boxShadow:
                    "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
                  borderRadius: "35px",
                  overflow: "hidden",
                  backgroundImage: `url(/assets/what-we-do/enclosed_auto.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Card>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default EnclosedAuto;
