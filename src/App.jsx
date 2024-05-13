import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      {/* <ContactMe/> */}
    </>
  );
}

export default App;
