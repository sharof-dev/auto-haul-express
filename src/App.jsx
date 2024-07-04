import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header, Navbar, Footer } from "./component/";
import { Home, About, Blog, Contact, Services } from "./pages/";
import { Box } from "@mui/material/";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
