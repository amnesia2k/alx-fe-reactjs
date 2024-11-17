import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <h1>
                404 Error <br />
                Page Not Found
              </h1>
            }
          />{" "}
          {/* Default route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
