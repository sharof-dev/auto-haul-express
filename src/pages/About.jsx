import React from "react";

import { Box, Typography, Button, useTheme } from "@mui/material";

import "./about.scss";

const About = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(./public/assets/header_image.jpg)",
          backgroundSize: "100% 550px",
          height: "550px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          [theme.breakpoints.down("md")]: {
            backgroundSize: "cover",
            height: "auto",
            padding: "20px",
          },
        }}
      >
        <Box
          className="header-content"
          sx={{
            textAlign: "center",
            width: "663px",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            [theme.breakpoints.down("md")]: {
              width: "100%",
              height: "auto",
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Source Serif Pro",
              fontSize: "96px",
              fontWeight: 700,
              color: "white",
              [theme.breakpoints.down("md")]: {
                fontSize: "48px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "36px",
              },
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "24px",
              fontWeight: 600,
              color: "white",
              marginTop: "20px",
              [theme.breakpoints.down("md")]: {
                fontSize: "16px",
                marginTop: "10px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "14px",
              },
            }}
          >
            From preschool to pre-tertiary, our students enjoy fun, interactive
            and relevant lessons and are empowered to think beyond the confines
            of the classroom.
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              backgroundColor: "#F3F25B",
              color: "#000000",
              borderRadius: "10px",
              [theme.breakpoints.down("md")]: {
                marginTop: "10px",
                padding: "8px 16px",
              },
              [theme.breakpoints.down("sm")]: {
                marginTop: "5px",
                padding: "6px 12px",
              },
            }}
          >
            See More
          </Button>
        </Box>
      </Box>

      <Box
        className="second-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "113px",
          width: "100%",
          marginTop: "50px",
          [theme.breakpoints.down("md")]: {
            gap: "50px",
            marginTop: "30px",
          },
          [theme.breakpoints.down("sm")]: {
            gap: "30px",
            marginTop: "20px",
          },
        }}
      >
        <Box className="begginer-section" sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Source Serif Pro",
              fontSize: "45px",
              fontWeight: 600,
              color: "#000000",
              [theme.breakpoints.down("md")]: {
                fontSize: "30px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "24px",
              },
            }}
          >
            Preparing Students to Achieve Success
          </Typography>
          <img
            src="./assets/Vector.svg"
            alt="Vector"
            style={{
              width: "283.63px",
              height: "40px",
              marginTop: "20px",
              [theme.breakpoints.down("md")]: {
                width: "200px",
                height: "30px",
                marginTop: "10px",
              },
              [theme.breakpoints.down("sm")]: {
                width: "150px",
                height: "25px",
              },
            }}
          />
        </Box>

        <Box
          className="content1"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "200px",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              gap: "50px",
            },
            [theme.breakpoints.down("sm")]: {
              gap: "30px",
            },
          }}
        >
          <Box
            className="left-content"
            sx={{
              width: "528px",
              height: "296px",
              [theme.breakpoints.down("md")]: {
                width: "100%",
                height: "auto",
              },
              [theme.breakpoints.down("sm")]: {
                width: "90%",
                height: "auto",
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Source Serif Pro",
                fontSize: "36px",
                fontWeight: 600,
                color: "#000000",
                [theme.breakpoints.down("md")]: {
                  fontSize: "24px",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "20px",
                },
              }}
            >
              Developing Confident and Successful Learners
            </Typography>
            <hr
              style={{
                width: "309px",
                height: "5px",
                backgroundColor: "#F3F25B",
                border: "none",
                marginLeft: "0",
                marginTop: "10px",
                marginBottom: "20px",
                [theme.breakpoints.down("md")]: {
                  width: "100%",
                  height: "3px",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "80%",
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "17px",
                fontWeight: 400,
                color: "#848383",
                textAlign: "left",
                [theme.breakpoints.down("md")]: {
                  fontSize: "14px",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "12px",
                },
              }}
            >
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam,
              quis nostrum exercitationem ullam corporis suscipit laboriosam,
              nisi ut al
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: "20px",
                backgroundColor: "#F3F25B",
                color: "#000000",
                borderRadius: "12px",
                width: "242px",
                height: "53px",
                boxShadow: "0px 4px 12px 0px #0000001F",
                [theme.breakpoints.down("md")]: {
                  width: "100%",
                  height: "auto",
                  padding: "10px",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "80%",
                  padding: "8px",
                },
              }}
            >
              View More
            </Button>
          </Box>
          <Box className="right-content">
            <img
              src="./assets/Polygon 24.png"
              alt="image"
              style={{
                width: "100%",
                height: "100%",
                [theme.breakpoints.down("md")]: {
                  width: "100%",
                  height: "auto",
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        className="content1"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "200px",
          marginTop: "50px",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            gap: "50px",
            marginTop: "30px",
          },
          [theme.breakpoints.down("sm")]: {
            gap: "30px",
            marginTop: "20px",
          },
        }}
      >
        <Box className="right-content">
          <img
            src="./assets/Polygon 24.png"
            alt="image"
            style={{
              width: "100%",
              height: "100%",
              [theme.breakpoints.down("md")]: {
                width: "100%",
                height: "auto",
              },
            }}
          />
        </Box>
        <Box
          className="left-content"
          sx={{
            width: "528px",
            height: "296px",
            [theme.breakpoints.down("md")]: {
              width: "100%",
              height: "auto",
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Source Serif Pro",
              fontSize: "36px",
              fontWeight: 600,
              color: "#000000",
              [theme.breakpoints.down("md")]: {
                fontSize: "24px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
              },
            }}
          >
            Enjoy Learning with a Unique Classroom Experience
          </Typography>
          <hr
            style={{
              width: "309px",
              height: "5px",
              backgroundColor: "#F3F25B",
              border: "none",
              marginLeft: "0",
              marginTop: "10px",
              marginBottom: "20px",
              [theme.breakpoints.down("md")]: {
                width: "100%",
                height: "3px",
              },
              [theme.breakpoints.down("sm")]: {
                width: "80%",
              },
            }}
          />
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "17px",
              fontWeight: 400,
              color: "#848383",
              textAlign: "left",
              [theme.breakpoints.down("md")]: {
                fontSize: "14px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "12px",
              },
            }}
          >
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            al
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              backgroundColor: "#F3F25B",
              color: "#000000",
              borderRadius: "12px",
              width: "242px",
              height: "53px",
              boxShadow: "0px 4px 12px 0px #0000001F",
              [theme.breakpoints.down("md")]: {
                width: "100%",
                height: "auto",
                padding: "10px",
              },
              [theme.breakpoints.down("sm")]: {
                width: "80%",
                padding: "8px",
              },
            }}
          >
            View More
          </Button>
        </Box>
      </Box>

      <Box
        className="carusel-container"
        sx={{
          textAlign: "center",
          backgroundColor: "white",
          padding: "20px",
          marginTop: "50px",
          [theme.breakpoints.down("md")]: {
            marginTop: "30px",
            padding: "10px",
          },
          [theme.breakpoints.down("sm")]: {
            marginTop: "20px",
            padding: "5px",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{ marginBottom: "20px", position: "relative" }}
        >
          Teachers
        </Typography>
        <Box
          className="teachers"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              gap: "30px",
            },
            [theme.breakpoints.down("sm")]: {
              gap: "20px",
            },
          }}
        >
          <Box className="teacher">
            <Box
              className="image-placeholder"
              sx={{
                width: "201px",
                height: "361px",
                marginBottom: "10px",
                [theme.breakpoints.down("md")]: {
                  width: "150px",
                  height: "250px",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "100px",
                  height: "150px",
                },
              }}
            >
              <img
                src="./assets/6-1.svg"
                alt="Hodim"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography
              sx={{
                [theme.breakpoints.down("md")]: {
                  fontSize: "14px",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "12px",
                },
              }}
            >
              John Carvan
            </Typography>
          </Box>
          <Box className="teacher">
            <Box
              className="image-placeholder"
              sx={{
                width: "460px",
                height: "450px",
                marginBottom: "10px",
                [theme.breakpoints.down("md")]: {
                  width: "300px",
                  height: "300px",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "200px",
                  height: "200px",
                },
              }}
            >
              <img
                src="./assets/6.svg"
                alt="hodim"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography
              sx={{
                [theme.breakpoints.down("md")]: {
                  fontSize: "14px",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "12px",
                },
              }}
            >
              Miss Smith Ellen
            </Typography>
          </Box>
          <Box className="teacher">
            <Box
              className="image-placeholder"
              sx={{
                width: "201px",
                height: "361px",
                marginBottom: "10px",
                [theme.breakpoints.down("md")]: {
                  width: "150px",
                  height: "250px",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "100px",
                  height: "150px",
                },
              }}
            >
              <img
                src="./assets/6-2.svg"
                alt="svg"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography
              sx={{
                [theme.breakpoints.down("md")]: {
                  fontSize: "14px",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "12px",
                },
              }}
            >
              John Carvan
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        className="container-bottom"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginTop: "50px",
          [theme.breakpoints.down("md")]: {
            marginTop: "30px",
            gap: "15px",
          },
          [theme.breakpoints.down("sm")]: {
            marginTop: "20px",
            gap: "10px",
          },
        }}
      >
        <Box className="info-content" sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Source Serif Pro",
              fontSize: "45px",
              fontWeight: 600,
              color: "#000000",
              [theme.breakpoints.down("md")]: {
                fontSize: "30px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "24px",
              },
            }}
          >
            Why it’s works
          </Typography>
          <img
            src="./assets/Vector.svg"
            alt="Vector"
            style={{
              width: "283.63px",
              height: "40px",
              marginTop: "20px",
              [theme.breakpoints.down("md")]: {
                width: "200px",
                height: "30px",
                marginTop: "10px",
              },
              [theme.breakpoints.down("sm")]: {
                width: "150px",
                height: "25px",
                marginTop: "5px",
              },
            }}
          />
        </Box>
        <Box
          className="containers"
          sx={{
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
            [theme.breakpoints.down("md")]: {
              gap: "30px",
            },
            [theme.breakpoints.down("sm")]: {
              gap: "20px",
            },
          }}
        >
          <Box
            className="contents"
            sx={{
              width: "334px",
              height: "230px",
              textAlign: "center",
              [theme.breakpoints.down("md")]: {
                width: "250px",
                height: "200px",
              },
              [theme.breakpoints.down("sm")]: {
                width: "200px",
                height: "150px",
              },
            }}
          >
            <img
              src="./assets/Frame(1).svg"
              alt="icon"
              style={{
                width: "129.59px",
                height: "100px",
                [theme.breakpoints.down("md")]: {
                  width: "100px",
                  height: "80px",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "80px",
                  height: "60px",
                },
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Source Serif Pro",
                fontSize: "24px",
                fontWeight: 600,
                color: "#000000",
                marginTop: "20px",
                [theme.breakpoints.down("md")]: {
                  fontSize: "18px",
                  marginTop: "15px",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "14px",
                  marginTop: "10px",
                },
              }}
            >
              Personalized learning
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "17px",
                fontWeight: 400,
                color: "#848383",
                textAlign: "center",
                marginTop: "20px",
                [theme.breakpoints.down("md")]: {
                  fontSize: "14px",
                  marginTop: "15px",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "12px",
                  marginTop: "10px",
                },
              }}
            >
              Students practice at their own pace, first filling in gaps in
              their understanding and then accelerating their learning.
            </Typography>
          </Box>
          <Box
            className="contents"
            sx={{
              width: "334px",
              height: "230px",
              textAlign: "center",
              [theme.breakpoints.down("md")]: {
                width: "250px",
                height: "200px",
              },
              [theme.breakpoints.down("sm")]: {
                width: "200px",
                height: "150px",
              },
            }}
          >
            <img
              src="./assets/Frame(2).svg"
              alt="icon"
              style={{
                width: "129.59px",
                height: "100px",
                marginTop: "30px",
                [theme.breakpoints.down("md")]: {
                  width: "100px",
                  height: "80px",
                  marginTop: "20px",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "80px",
                  height: "60px",
                  marginTop: "15px",
                },
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Source Serif Pro",
                fontSize: "24px",
                fontWeight: 600,
                color: "#000000",
                [theme.breakpoints.down("md")]: {
                  fontSize: "18px",
                  marginTop: "15px",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "14px",
                  marginTop: "10px",
                },
              }}
            >
              Trusted content
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "17px",
                fontWeight: 400,
                color: "#848383",
                textAlign: "center",
                [theme.breakpoints.down("md")]: {
                  fontSize: "14px",
                  marginTop: "15px",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "12px",
                  marginTop: "10px",
                },
              }}
            >
              Created by experts, library of trusted practice and lessons covers
              math, science, and more. Always free for learners and teachers.
            </Typography>
          </Box>
          <Box
            className="contents"
            sx={{
              width: "334px",
              height: "230px",
              textAlign: "center",
              [theme.breakpoints.down("md")]: {
                width: "250px",
                height: "200px",
              },
              [theme.breakpoints.down("sm")]: {
                width: "200px",
                height: "150px",
              },
            }}
          >
            <img
              src="./assets/Frame.svg"
              alt="icon"
              style={{
                width: "129.59px",
                height: "100px",
                [theme.breakpoints.down("md")]: {
                  width: "100px",
                  height: "80px",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "80px",
                  height: "60px",
                },
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Source Serif Pro",
                fontSize: "24px",
                fontWeight: 600,
                color: "#000000",
                marginTop: "20px",
                [theme.breakpoints.down("md")]: {
                  fontSize: "18px",
                  marginTop: "15px",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "14px",
                  marginTop: "10px",
                },
              }}
            >
              Tools to empower teachers
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "17px",
                fontWeight: 400,
                color: "#848383",
                textAlign: "center",
                marginTop: "20px",
                [theme.breakpoints.down("md")]: {
                  fontSize: "14px",
                  marginTop: "15px",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "12px",
                  marginTop: "10px",
                },
              }}
            >
              Teachers can identify gaps in their students’ understanding,
              tailor instruction, and meet the needs of every student.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};




export default About;
