import { useState, useEffect } from "react";
import Busqueda from "./Busqueda";
import ListItem from "./ListItem";
import "./MiApi.css";

const MiApi = () => {
  const [partidos, setPartidos] = useState([]);
  const [search, setSearch] = useState("");
  const [listData, setListData] = useState([]);
  const [mode, setMode] = useState("FS");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://worldcupjson.net/matches");
      const data = await res.json();
      setPartidos(data);
      setListData(data.filter((item) => item.stage_name === "First stage"));
    };
    fetchData();
  }, []);

  const filteredResults = (results) =>
    results.filter(
      (item) =>
        item.home_team.name.toLowerCase().includes(search.toLowerCase()) ||
        item.away_team.name.toLowerCase().includes(search.toLowerCase())
    );

  const changeListData = (e) => {
    if (e.target.value === "FS") {
      setListData(partidos.filter((item) => item.stage_name === "First stage"));
      setMode("FS");
    }
    if (e.target.value === "R16") {
      setListData(partidos.filter((item) => item.stage_name === "Round of 16"));
      setMode("R16");
    }
    if (e.target.value === "QF") {
      setListData(
        partidos.filter((item) => item.stage_name === "Quarter-final")
      );
      setMode("QF");
    }
    if (e.target.value === "SF") {
      setListData(partidos.filter((item) => item.stage_name === "Semi-final"));
      setMode("SF");
    }
    if (e.target.value === "F") {
      setListData(partidos.filter((item) => item.stage_name === "Final"));
      setMode("F");
    }
  };

  return (
    <section className="all-matches-section">
      <h1>Match list</h1>
      <Busqueda
        textvalue={search}
        setSearch={(e) => {
          setSearch(e.target.value);
        }}
        selectData={changeListData}
        mode={mode}
      />
      <ul className="game-grid">
        {(search.length !== 0 ? filteredResults(listData) : listData)
          .sort((a, b) => a.id - b.id)
          .map((item) => {
            return (
              <ListItem
                key={item.id}
                id={item.id}
                datetime={item.datetime}
                stage={item.stage_name}
                home_team_country={item.home_team_country}
                home_team_name={item.home_team.name}
                home_team_goals={item.home_team.goals}
                away_team_country={item.away_team_country}
                away_team_name={item.away_team.name}
                away_team_goals={item.away_team.goals}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default MiApi;
