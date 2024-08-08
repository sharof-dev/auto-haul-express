import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { BodyText1 } from "../../pages/how-it-works/styles";
import { useNavigate } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function BlogCard() {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        maxWidth: "350px",
        margin: "15px",
        borderRadius: "35px",
        backgroundColor: "#11172B",
        border: "3px solid #11172B",
        boxShadow:
          "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
        "&:hover": {
          boxShadow:
            "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
        },
      }}
    >
      <Box
        component={"div"}
        sx={{ borderRadius: "35px", position: "relative", cursor: "pointer" }}
      >
        <Box
          component={"img"}
          width={"345px"}
          height={"172px"}
          loading="lazy"
          src={
            "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp"
          }
          alt={"#"}
          sx={{
            borderRadius: "35px",
            width: "100%",
            maxWidth: "345px",
          }}
        />
        <Box component={"div"} sx={{ position: "absolute" }}>
          <ArrowForwardIcon />
        </Box>
      </Box>
      <CardContent sx={{ padding: "15px" }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#fff",
            transition: "color 0.2s",
            cursor: "pointer",
            marginBottom: "15px",
            "&:hover": {
              color: "#E01933",
            },
          }}
        >
          New Hampshire Car Transport
        </Typography>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color: "#fff",
            marginBottom: "15px",
          }}
        >
          <AccessTimeIcon />
          <time datetime="August 5, 2024">August 5, 2024</time>
        </Box>
        <Box component={"div"}>
          <Typography sx={{ color: "#fff" }}>
            Rhode Island Car Transport US Car-Go Freight: Your Trusted Car
            Transport to Rhode Island When planning to transport your car to
            Rhode Island, partnering...
          </Typography>
        </Box>
        <Button
          variant="text"
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            padding: "10px 0px",
          }}
        >
          Read More...
        </Button>
      </CardContent>
    </Card>
  );
}

export default BlogCard;
