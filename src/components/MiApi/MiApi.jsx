import { useState, useEffect } from "react";
import Busqueda from "../Busqueda/Busqueda";
import ListItem from "../ListItem/ListItem";
import "./MiApi.css";

const MiApi = () => {
  const [partidos, setPartidos] = useState([]);
  const [search, setSearch] = useState("");
  const [listData, setListData] = useState([]);
  const [order, setOrder] = useState("First to last");

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
    setListData(partidos.filter((item) => item.stage_name === e.target.value));
  };

  return (
    <section className="all-matches-section" id="matchlist">
      <h2>
        <i className="fa-solid fa-rectangle-list"></i> Match list
      </h2>

      <Busqueda
        textvalue={search}
        setSearch={(e) => {
          setSearch(e.target.value);
        }}
        selectData={changeListData}
        changeOrder={(e) => setOrder(e.target.value)}
      />

      <ul className="game-grid">
        {(search.length !== 0 ? filteredResults(listData) : listData)
          .sort((a, b) =>
            order === "First to last" ? a.id - b.id : b.id - a.id
          )
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
                home_team_penalties={item.home_team.penalties}
                away_team_country={item.away_team_country}
                away_team_name={item.away_team.name}
                away_team_goals={item.away_team.goals}
                away_team_penalties={item.away_team.penalties}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default MiApi;
