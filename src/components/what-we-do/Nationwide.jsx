import { Box, Button, Container } from "@mui/material";
import {
  BannerColor,
  BannerImage,
  BodyText1,
  FormContainer,
  FormInput,
  FormTitle,
  Title1,
} from "../../pages/how-it-works/styles";

function Nationwide() {
  return (
    <>
      <Box
        id="nationwide"
        component={"section"}
        sx={{ padding: { xs: "80px 0", sm: "150px 0" }, position: "relative" }}
      >
        {/* Banner Image */}
        <BannerImage
          image={"/assets/what-we-do/nationwide-background.jpg"}
          component={"div"}
        />
        {/* Banner Color */}
        <BannerColor
          color={"linear-gradient(180deg, #11172b 40%, #11172B 100%)"}
        />
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                padding: { xs: "0px", sm: "10px", md: "30px" },
                maxWidth: { sm: "900px", md: "697px" },
                width: "100%",
              }}
            >
              <Title1 variant="h1" sx={{ textAlign: "left" }}>
                Nationwide Auto Transport <br />
                <Box
                  component="span"
                  sx={{
                    fontSize: { xs: "30px", sm: "35px", lg: "45px" },
                    color: "#E01933",
                  }}
                >
                  by Reliable Carriers.
                </Box>
              </Title1>

              <BodyText1
                sx={{
                  textAlign: "left",
                }}
              >
                US Car-Go offers <em>Nationwide Auto Transport</em>, making
                vehicle transportation a breeze. With us, you can enjoy
                hassle-free and affordable transport services. From start to
                finish, we handle everything, allowing you to sit back and
                relax. Whether you need to ship your car, boat, or anything in
                between, our wide range of services has got you covered. Let us
                make your next move stress-free and easy. Discover our services
                today and experience seamless vehicle transportation.
              </BodyText1>
            </Box>
            <Box
              sx={{
                maxWidth: { sm: "900px", md: "513px" },
                width: "100%",
                padding: { xs: "10px 0 0 0", sm: "10px" },
              }}
            >
              <FormContainer>
                <Box>
                  <FormTitle variant="h2">Fill Up the Get Quote Form</FormTitle>
                  <FormTitle variant="h4">
                    And Get a Guaranteed Best Competitive Price
                    <span style={{ color: "#E01933" }}>.</span>
                  </FormTitle>
                </Box>
                <Box>
                  <FormInput
                    type="text"
                    name="origin-zip"
                    placeholder="Origin Zip or City"
                    variant="plain"
                  />
                  <FormInput
                    type="text"
                    name="destination-zip"
                    placeholder="Destination Zip or City"
                  />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    margin: "0 auto",
                    maxWidth: "146px",
                    width: "100%",
                    padding: "15px 40px",
                    fontSize: "16px",
                    borderRadius: "50px",
                    backgroundColor: "#E01933",
                    transition: "0.1s linear",
                    "&:hover": {
                      backgroundColor: "#E01933",
                      opacity: 0.8,
                    },
                  }}
                  disableRipple
                >
                  Continue
                </Button>
              </FormContainer>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Nationwide;
