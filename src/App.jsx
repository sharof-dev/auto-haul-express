import { Routes, Route, useParams } from "react-router-dom";
import { Header, Footer, Navbar } from "./component/";
import { Home, About, Blog, Contact, Services } from "./pages/";
import { Box, Container, Stack } from "@mui/material";


const App = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction={"column"}>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Stack>
    </Box>
  );
};

export default App;
