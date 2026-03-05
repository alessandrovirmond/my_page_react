import "./App.css";
import Home from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import SplashCursor from "./components/ui/SplashCursor/SplashCursor.jsx";
import Galaxy from "./components/ui/Particles/Galaxy.jsx";

function App() {
  return (
    <div className="app-wrapper">
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      <SplashCursor />

      <Navbar isHome={true} />

      <main style={{ paddingTop: "90px" }}>
        <Home />
      </main>
    </div>
  );
}

export default App;
