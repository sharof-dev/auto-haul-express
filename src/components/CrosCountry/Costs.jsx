import { Box, Button, Container } from "@mui/material";
import {
  BannerColor,
  BannerImage,
  BodyText1,
  FormContainer,
  FormInput,
  FormTitle,
} from "../../pages/how-it-works/styles";
import { Title } from "../../pages/how-it-works/styles";

function Costs() {
  return (
    <>
      <Box
        id="costs"
        component={"section"}
        sx={{ padding: { xs: "80px 0", sm: "150px 0" }, position: "relative" }}
      >
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
                maxWidth: { sm: "900px", md: "587px" },
                width: "100%",
              }}
            >
              <Title
                variant="h1"
                sx={{ textAlign: { xs: "center", sm: "left" } }}
              >
                Car Shipping Costs
                <Box
                  component="span"
                  sx={{
                    fontSize: { xs: "30px", sm: "35px", lg: "45px" },
                    color: "#E01933",
                  }}
                >
                  .
                </Box>
              </Title>

              <BodyText1
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                We offer competitive prices and personalized service to our
                customers, and we make sure that their cars are transported
                safely and quickly.
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

export default Costs;
