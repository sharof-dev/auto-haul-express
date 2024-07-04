import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./component/";
import { Home, About, Blog, Contact, Services } from "./pages/";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
