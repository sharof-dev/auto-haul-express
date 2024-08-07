import { Box, Card, CardContent, Container, Typography, styled } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
const CardContext = styled(Card)(({ theme }) => ({
  transition: 'transform 0.8s, box-shadow 0.8s, color 0.8s', // To'g'ri xususiyatlarni sozlash
  '&:hover': {
    boxShadow: '-5px 5px 0px 0px rgba(153, 24, 50, 0.85)',
    '.hoverText': {
      color: '#e01933',
    },
  },
}))

<<<<<<< HEAD:src/components/CrosCountry/cards/SliderOurCard.jsx
function SliderOurCard({ starLength = 5, description, userName, logo, text }) {
=======
function SliderOurCard({ starLength = 5, description, userName, logo, mini }) {
>>>>>>> behruz:src/components/car-shipping-cost/cards/SliderOurCard.jsx
  let starArr = [];
  for (let i = 0; i < starLength; i++) starArr.push(i);

  return (
<<<<<<< HEAD:src/components/CrosCountry/cards/SliderOurCard.jsx
    <>
      {!text ? (<>
        <Card
          sx={{
            width: '100%',
            padding: "30px",
            borderRadius: "35px",
            overflow: "visible",
            boxShadow:
              "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
=======
    <Card
      sx={{
        width: "100%",
        padding: "30px",
        minHeight: " 462px",
        borderRadius: "35px",
        overflow: "visible",
        boxShadow:
          "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
        "&:hover": {
          boxShadow:
            "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
        },
      }}
    >
      <CardContent
        sx={{ padding: 0, display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="body1"
          sx={{
            margin: "25px 0",
            fontSize: "18px",
            lineHeight: "1.2em",
            color: "#7A7A7A",
          }}
        >
          {description}
        </Typography>
        <Box component={"div"} sx={{ marginBottom: "20px" }}>
          <Box
            component={"div"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: `${mini ? "center" : "flex-start"}`,
              gap: "5px",
            }}
          >
            <Box component={"img"} src={logo} alt={"company logo"} />
            <Typography
              variant="caption"
              sx={{
                color: "#333",
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: "1.5",
              }}
            >
              {starLength} Star Customer Rating
            </Typography>
          </Box>

          <Box
            component={"div"}
            sx={{
              display: "flex",
              justifyContent: `${mini ? "center" : "flex-start"}`,
            }}
          >
            {starArr.map((_, idx) => (
              <StarIcon
                sx={{ fontSize: "1.5rem", color: "#7a7a7a" }}
                key={idx}
              />
            ))}
          </Box>
        </Box>

        <Box
          component={"div"}
          sx={{
            order: `${mini ? "-1" : "1"}`,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
>>>>>>> behruz:src/components/car-shipping-cost/cards/SliderOurCard.jsx
            "&:hover": {
              boxShadow:
                "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
            },
          }}
        >
          <CardContent sx={{ padding: '5px' }}>
            <Typography
              variant="body1"
              sx={{
                margin: "25px 0",
                fontSize: "18px",
                lineHeight: "1.2em",
                color: "#7A7A7A",
              }}
            >
              {description}
            </Typography>
            <Box component={"div"} sx={{ marginBottom: "20px" }}>
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Box component={"img"} src={logo} alt={"company logo"} />
                <Typography
                  variant="caption"
                  sx={{
                    color: "#333",
                    fontSize: "1rem",
                    fontWeight: 400,
                    lineHeight: "1.5",
                  }}
                >
                  {starLength} Star Customer Rating
                </Typography>
              </Box>

              <Box component={"div"}>
                {starArr.map((_, idx) => (
                  <StarIcon
                    sx={{ fontSize: "1.5rem", color: "#7a7a7a" }}
                    key={idx}
                  />
                ))}
              </Box>
            </Box>

            <Box
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: '100%',
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
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#11172B",
                  transition: "color 0.2s",
                }}
              >
                {userName}
              </Typography>
              <FormatQuoteOutlinedIcon
                sx={{
                  fontSize: "90px",
                  color: "#11172B",
                  transition: "fill 0.2s",
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </>) : (<>
        <Container maxWidth='xl'>
          <CardContext
            sx={{
              width: '90%',
              padding: "30px",
              borderRadius: "35px",
              overflow: "visible",
              boxShadow:
                "5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
              "&:hover": {
                boxShadow:
                  "-5px 5px 0px 0px rgba(153, 24.999999999999996, 50.999999999999986, 0.8509803921568627)",
              },
            }}
          >
            <CardContent sx={{ padding: '0px 30px' }}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#11172B",
                    transition: "color 0.2s",
                  }}
                  className="hoverText"
                >
                  {userName}
                </Typography>
                <FormatQuoteOutlinedIcon
                  sx={{
                    fontSize: "25px",
                    color: "#11172B",
                    transition: "fill 0.2s",
                  }}
                  className="hoverText"
                />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  margin: "20px",
                  fontSize: "18px",
                  lineHeight: "1.2em",
                  color: "#7A7A7A",
                }}
              >
                {description}
              </Typography>

              <Box component={"div"} >
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Box component={"img"} src={logo} alt={"company logo"} />
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#333",
                      fontSize: "1rem",
                      fontWeight: 400,
                      lineHeight: "1.5",
                    }}
                  >
                    {starLength} Star Customer Rating
                  </Typography>
                </Box>

                <Box component='div'>
                  {starArr.map((_, idx) => (
                    <StarIcon
                      sx={{ fontSize: "1.5rem", color: "#7a7a7a" }}
                      key={idx}
                    />
                  ))}
                </Box>
              </Box>

              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: '100%',
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
              </Box>
            </CardContent>
          </CardContext>
        </Container>
      </>)}
    </>
  );
}

export default SliderOurCard;
