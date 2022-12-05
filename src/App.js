import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import MiApi from "./components/MiApi/MiApi";
import Footer from "./components/Footer/Footer";
import PartidosHoy from "./components/PartidosHoy/PartidosHoy";
import Playoffs from "./components/Playoffs/Playoffs";

function App() {
  return (
    <>
      <Nav />
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
