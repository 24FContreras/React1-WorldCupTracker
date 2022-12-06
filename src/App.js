import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import PartidosHoy from "./components/PartidosHoy/PartidosHoy";
import Playoffs from "./components/Playoffs/Playoffs";
import MiApi from "./components/MiApi/MiApi";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Header />
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
