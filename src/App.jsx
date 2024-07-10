import { Routes, Route, useParams } from "react-router-dom";
import { Header, Footer, Navbar } from "./component/";
import { Home, About, Blog, Contact, Services } from "./pages/";
import { Box, Container, Stack } from "@mui/material";


const App = () => {
  return (
    <Stack>
      <Header />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      <Footer />
    </Stack>
  );
};

export default App;
