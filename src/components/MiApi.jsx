import { useState, useEffect } from "react";
import Busqueda from "./Busqueda";
import ListItem from "./ListItem";
import "./MiApi.css";

const MiApi = () => {
  const [partidos, setPartidos] = useState([]);
  const [search, setSearch] = useState("");
  const [listData, setListData] = useState([]);
  const [mode, setMode] = useState("partidos");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://worldcupjson.net/matches");
      const data = await res.json();
      setPartidos(data);
      setListData(data);
    };
    fetchData();
  }, []);

  const filteredResults = (results) =>
    results.filter(
      (item) =>
        item.home_team.name.toLowerCase().includes(search.toLowerCase()) ||
        item.away_team.name.toLowerCase().includes(search.toLowerCase())
    );

  const nextMatches = () =>
    partidos.filter((item) => item.status === "future_scheduled");

  const pastMatches = () =>
    partidos.filter((item) => item.status === "completed");

  const changeListData = (e) => {
    if (e.target.value === "partidos") {
      setListData(partidos);
      setMode("partidos");
    }
    if (e.target.value === "proximos") {
      setListData(nextMatches);
      setMode("proximos");
    }
    if (e.target.value === "pasados") {
      setListData(pastMatches);
      setMode("pasados");
    }
  };

  return (
    <section>
      <h1>Match list</h1>
      <Busqueda
        textvalue={search}
        setSearch={(e) => {
          setSearch(e.target.value);
        }}
        selectData={changeListData}
        mode={mode}
      />
      <ul className="game-list">
        {(search.length !== 0 ? filteredResults(listData) : listData).map(
          (item) => {
            return (
              <ListItem
                key={item.id}
                id={item.id}
                datetime={item.datetime}
                home_team_country={item.home_team_country}
                home_team_name={item.home_team.name}
                home_team_goals={item.home_team.goals}
                away_team_country={item.away_team_country}
                away_team_name={item.away_team.name}
                away_team_goals={item.away_team.goals}
              />
            );
          }
        )}
      </ul>
    </section>
  );
};

export default MiApi;
