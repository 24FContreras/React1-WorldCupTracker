import Hero from "./components/Hero";
import MiApi from "./components/MiApi";
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
    </>
  );
}

export default App;
