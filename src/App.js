import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import TodaysGames from "./components/TodaysGames/TodaysGames";
import Playoffs from "./components/Playoffs/Playoffs";
import MatchList from "./components/MatchList/MatchList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <TodaysGames />
        <Playoffs />
        <MatchList />
      </main>
      <Footer />
    </>
  );
}

export default App;
