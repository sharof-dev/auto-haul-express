import React from 'react';
import { Box, Card, CardContent, Typography, Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import { styled } from '@mui/system';

const CardContext = styled(Card)(({ theme }) => ({
  transition: 'transform 0.8s, box-shadow 0.8s, color 0.8s',
  '&:hover': {
    boxShadow: '-5px 5px 0px 0px rgba(153, 24, 50, 0.85)',
    '.hoverText': {
      color: '#e01933',
    },
  },
}));

const commonCardStyles = {
  padding: '40px',
  borderRadius: '35px',
  overflow: 'visible',
  boxShadow: '5px 5px 0px 0px rgba(153, 24, 50, 0.85)',
  '&:hover': {
    boxShadow: '-5px 5px 0px 0px rgba(153, 24, 50, 0.85)',
  },
};

const CardContentSection = ({ starLength = 5, description, userName, logo, text, mini }) => {
  const starArr = Array.from({ length: starLength }, (_, i) => i);

  return (
    <CardContent sx={{ padding: 0, display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Typography
          variant="h5"
          sx={{ fontSize: "18px", fontWeight: 700, color: "#11172B", transition: "color 0.2s" }}
          className="hoverText"
        >
          {userName}
        </Typography>
        <FormatQuoteOutlinedIcon
          sx={{ fontSize: "50px", color: "#11172B", transition: "fill 0.2s" }}
          className="hoverText"
        />
      </Box>

      <Typography
        variant="body1"
        sx={{ margin: "25px 0", fontSize: "18px", lineHeight: "1.2em", color: "#7A7A7A" }}
      >
        {description}
      </Typography>

      <Box component="div" sx={{ marginBottom: "20px" }}>
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "center", justifyContent: mini ? "center" : "flex-start", gap: "5px" }}
        >
          <Box component="img" src={logo} alt="company logo" />
          <Typography
            variant="caption"
            sx={{ color: "#333", fontSize: "1rem", fontWeight: 400, lineHeight: "1.5" }}
          >
            {starLength} Star Customer Rating
          </Typography>
        </Box>
        <Box component="div" sx={{ display: "flex", justifyContent: mini ? "center" : "flex-start" }}>
          {starArr.map((_, idx) => (
            <StarIcon sx={{ fontSize: "1.5rem", color: "#7a7a7a" }} key={idx} />
          ))}
        </Box>
      </Box>

      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          "&:hover": {
            h5: {
              color: "red",
            },
            svg: {
              fill: "red",
            },
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: "18px", fontWeight: 700, color: "#11172B", transition: "color 0.2s" }}
        >
          {userName}
        </Typography>
        <FormatQuoteOutlinedIcon
          sx={{ fontSize: "90px", color: "#11172B", transition: "fill 0.2s" }}
        />
      </Box>
    </CardContent>
  );
};

function SliderOurCard({ starLength = 5, description, userName, logo, text, mini }) {
  return (
    <>
      {!text ? (
        <Card sx={{ ...commonCardStyles, minHeight: '462px' }}>
          <CardContentSection {...{ starLength, description, userName, logo, text, mini }} />
        </Card>
      ) : (
        <Container maxWidth="xl">
          <CardContext sx={commonCardStyles}>
            <CardContentSection {...{ starLength, description, userName, logo, text, mini }} />
          </CardContext>
        </Container>
      )}
    </>
  );
}

export default SliderOurCard;
