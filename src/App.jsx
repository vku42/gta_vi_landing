import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-2xl text-pink">Welcome to world of GTA</h1>
      </div>
    </main>
  );
};

export default App;
