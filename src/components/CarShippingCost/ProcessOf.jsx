import CardImg from "./cards/CardImg";
import CardDrop from "./CardDrop";
import { Section } from "../../pages/how-it-works/styles";
import { Box, Container } from "@mui/material";

function ProcessOf() {
  return (
    <>
      <Section component={"section"} id="process-of">
        <Container
          maxWidth="xl"
          sx={{
            overflow: "visible",
            padding: { xs: "0px", sm: "0px", md: "0 24px" },
          }}
        >
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
            <CardDrop />
            <CardImg img={"/assets/how-it-works/process_of.webp"} />
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default ProcessOf;
