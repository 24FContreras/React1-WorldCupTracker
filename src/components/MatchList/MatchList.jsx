import { useState } from "react";

import "./MatchList.css";
import ListItem from "../ListItem/ListItem";
import Busqueda from "../Busqueda/Busqueda";

import { useFetchData } from "./../../hooks/useFetchData";

const MatchList = () => {
  const { data, loading } = useFetchData("https://worldcupjson.net/matches");
  const [search, setSearch] = useState({
    searchbar: "",
    order: "First to last",
    stage: "First stage",
  });

  return (
    <section className="all-matches-section" id="matchlist">
      <h2>
        <i className="fa-solid fa-rectangle-list"></i> Match list
      </h2>

      <div>
        <Busqueda
          textvalue={search.searchbar}
          setSearch={(e) => {
            setSearch({ ...search, searchbar: e.target.value });
          }}
          selectData={(e) => setSearch({ ...search, stage: e.target.value })}
          changeOrder={(e) => setSearch({ ...search, order: e.target.value })}
        />

        <ul className="game-grid">
          {!loading ? (
            data
              .filter(
                (item) =>
                  item.home_team.name
                    .toLowerCase()
                    .includes(search.searchbar.toLowerCase()) ||
                  item.away_team.name
                    .toLowerCase()
                    .includes(search.searchbar.toLowerCase())
              )
              .filter((item) => item.stage_name === search.stage)
              .sort((a, b) =>
                search.order === "First to last" ? a.id - b.id : b.id - a.id
              )
              .map((item) => (
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
              ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default MatchList;
