import { Box, Card, CardContent, Container, Typography, styled } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import AOS from 'aos'
import 'aos/dist/aos.css'

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

const CardContentSection = ({ description, userName, logo, starLength, text }) => (
  <CardContent sx={{ padding: '5px' }}>
    {text && (
      <Box display="flex" justifyContent="space-between" alignItems="center">
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
    )}
    <Typography
      variant="body1"
      sx={{ margin: "25px 0", fontSize: "18px", lineHeight: "1.2em", color: "#7A7A7A" }}
    >
      {description}
    </Typography>
    <Box component="div" sx={{ marginBottom: "20px" }}>
      <Box component="div" sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <Box component="img" src={logo} alt="company logo" />
        <Typography
          variant="caption"
          sx={{ color: "#333", fontSize: "1rem", fontWeight: 400, lineHeight: "1.5" }}
        >
          {starLength} Star Customer Rating
        </Typography>
      </Box>
      <Box component="div">
        {Array.from({ length: starLength }, (_, idx) => (
          <StarIcon sx={{ fontSize: "1.5rem", color: "#7a7a7a" }} key={idx} />
        ))}
      </Box>
      <Typography
          variant="h5"
          sx={{ fontSize: "18px", fontWeight: 700, color: "#11172B", transition: "color 0.2s", mt: 5 }}
          className="hoverText"
        >
          {userName}
        </Typography>
    </Box>
    
  </CardContent>
);

function SliderOurCard({ starLength = 5, description, userName, logo, text }) {
  return (
    <>
      {!text ? (
        <Card sx={{ ...commonCardStyles, minHeight: '462px' }}>
          <CardContentSection {...{ starLength, description, userName, logo, text }} />
        </Card>
      ) : (
        <Container maxWidth="xl">
          <CardContext sx={commonCardStyles}>
            <CardContentSection {...{ starLength, description, userName, logo, text }} />
          </CardContext>
        </Container>
      )}
    </>
  );
}

export default SliderOurCard;
