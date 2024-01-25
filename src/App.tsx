import Home from "./pages/home/Home.tsx";
import AboutMe from "./pages/about me/AboutMe.tsx";
import Projects from "./pages/projects/Projects.tsx";
import ContactMe from "./pages/contact me/ContactMe.tsx";
import Footer from "./pages/footer/Footer.tsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
