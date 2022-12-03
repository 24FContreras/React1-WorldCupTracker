import Hero from "./components/Hero";
import MiApi from "./components/MiApi";
import Footer from "./components/Footer";
import PartidosHoy from "./components/PartidosHoy";

function App() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <PartidosHoy />
        <MiApi />
      </main>
      <Footer />
    </>
  );
}

export default App;
