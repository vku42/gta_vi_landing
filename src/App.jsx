import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./scetions/Hero";
import NavBar from "./scetions/NavBar";
import FirstVideo from "./scetions/FirstVideo";
import Jason from "./scetions/jason";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
      <Jason />
    </main>
  );
};

export default App;
