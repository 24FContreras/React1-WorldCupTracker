import { useState, useEffect } from "react";
import Busqueda from "../Busqueda/Busqueda";
import ListItem from "../ListItem/ListItem";
import "./MiApi.css";
import matchesJson from "../../matches.json";

const MiApi = () => {
  const [partidos, setPartidos] = useState(matchesJson);
  const [search, setSearch] = useState("");
  const [listData, setListData] = useState(
    matchesJson.filter((item) => item.stage_name === "First stage")
  );
  const [order, setOrder] = useState("First to last");

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
        selectData={(e) => {
          setListData(
            partidos.filter((item) => item.stage_name === e.target.value)
          );
        }}
        changeOrder={(e) => setOrder(e.target.value)}
      />

      <ul className="game-grid">
        {(search.length !== 0
          ? listData.filter(
              (item) =>
                item.home_team.name
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                item.away_team.name.toLowerCase().includes(search.toLowerCase())
            )
          : listData
        )
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
