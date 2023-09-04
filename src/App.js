import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import PartidosHoy from "./components/PartidosHoy/PartidosHoy";
import Playoffs from "./components/Playoffs/Playoffs";
import MatchList from "./components/MatchList/MatchList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <PartidosHoy />
        <Playoffs />
        <MatchList />
      </main>
      <Footer />
    </>
  );
}

export default App;
