import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./scetions/Hero";
import NavBar from "./scetions/NavBar";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
    </main>
  );
};

export default App;
