import { Box, Card, CardContent, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Title4 } from "../../pages/how-it-works/styles";

const CardIcon = () => {
  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "absolute",
        top: "-80px",
        left: "50%",
        transform: "translate(-50%, 0)",
        zIndex: "-1",
      }}
    >
      <Box
        component={"div"}
        sx={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          padding: "10px",
          marginBottom: "14px",
          border: "2px solid #E01933",
          borderRadius: "50%",
        }}
      >
        <LocalShippingIcon fontSize="large" sx={{ color: "#E01933" }} />
      </Box>

      <Box
        component={"div"}
        sx={{
          width: "20px",
          height: "20px",
          backgroundColor: "#11172B",
          rotate: "135deg",
        }}
      />
    </Box>
  );
};

function SliderCard() {
  return (
    <Card
      sx={{
        marginTop: "80px",
        maxWidth: "493px",
        width: "100%",
        padding: "30px",
        boxShadow:
          "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
        borderRadius: "35px",
        backgroundColor: "#11172B",
        position: "relative",
        overflow: "visible",
        "&:hover": {
          boxShadow:
            "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
        },
      }}
    >
      <Box
        component={"div"}
        sx={{
          borderRadius: "35px",
          maxWidth: "433px",
          width: "100%",
          overflow: "hidden",
          marginBottom: "10px",
        }}
      >
        <CardIcon />
        <Box
          component={"img"}
          width={"433px"}
          height={"288px"}
          loading="lazy"
          src={"/assets/how-it-works/faq_slider0.webp"}
          sx={{
            height: "auto",
            objectFit: "cover",
            objectPosition: "top",
          }}
          alt="FAQ image"
        />
      </Box>

      <CardContent sx={{ padding: "0" }}>
        <Title4
          variant="h6"
          textcolor={"#E01933"}
          sx={{
            marginBottom: "10px",
          }}
        >
          Calculating my car shipping estimate and auto shipper math
        </Title4>
        <Typography
          variant="body1"
          sx={{
            fontSize: { sm: "0.8rem", md: "1rem" },
            fontWeight: "400",
            lineHeight: "1.5",
            color: "#fff",
          }}
        >
          The auto transport industry is an important part of the transportation
          industry. It offers a variety of services to move cars from one place
          to another. Over the past few years, the industry has grown a lot, and
          that growth is expected to continue because more and more people need
          services to move cars.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SliderCard;
