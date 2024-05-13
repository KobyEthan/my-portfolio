import About from "./components/About";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
