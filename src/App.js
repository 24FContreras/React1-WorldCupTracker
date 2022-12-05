import Hero from "./components/Hero";
import MiApi from "./components/MiApi";
import Footer from "./components/Footer";
import PartidosHoy from "./components/PartidosHoy";
import Playoffs from "./components/Playoffs";

function App() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <PartidosHoy />
        <Playoffs />
        <MiApi />
      </main>
      <Footer />
    </>
  );
}

export default App;
