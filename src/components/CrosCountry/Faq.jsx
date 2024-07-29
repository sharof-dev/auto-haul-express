import { Box, Container } from "@mui/material";
import { Section, Title2 } from "../../pages/how-it-works/styles";
import { SliderCard } from "../";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Faq() {
  return (
    <>
      <Section component={"section"} id="process-of">
        <Container maxWidth="xl">
          <Box component={"div"}>
            <Title2
              variant="h3"
              color="#11172B"
              sx={{ textAlign: "center", marginBottom: "20px" }}
            >
              FAQ
              <Box component={"span"} sx={{ color: "#E01933" }}>
                .
              </Box>
            </Title2>

            <Swiper
              // modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide style={{ maxWidth: "493px", width: "100%" }}>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: "493px", width: "100%" }}>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: "493px", width: "100%" }}>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide style={{ maxWidth: "493px", width: "100%" }}>
                <SliderCard />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Faq;
