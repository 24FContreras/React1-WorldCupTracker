import { useState, useEffect } from "react";
import Busqueda from "./Busqueda";
import "./MiApi.css";

const MiApi = () => {
  const [partidos, setPartidos] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState("partidos");

  const formatDate = (date) => {
    const getDate = new Date(date).toLocaleDateString("en-us", {
      weekday: "long",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    return getDate;
  };

  const getStatus = (status, datetime, time) => {
    if (status === "future_scheduled")
      return <p className="status">{formatDate(datetime)}</p>;
    if (status === "in_progress")
      return (
        <p className="status live">
          <i className="fa-solid fa-futbol"></i> Live {time}
        </p>
      );
    if (status === "completed") return <p className="status">Finished</p>;
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://worldcupjson.net/matches");
      const data = await res.json();

      setPartidos(data);
    };

    fetchData();
  }, []);

  const filteredResults = (listdata) =>
    listdata.filter(
      (item) =>
        item.home_team.name.toLowerCase().includes(search.toLowerCase()) ||
        item.away_team.name.toLowerCase().includes(search.toLowerCase())
    );

  const finishedGames = partidos.filter((item) => item.status === "completed");
  const nextGames = partidos.filter(
    (item) => item.status === "future_scheduled"
  );

  return (
    <section>
      <h1>Match list</h1>
      <Busqueda
        value={search}
        setSearch={(e) => {
          setSearch(e.target.value);
        }}
      />
      <ul className="game-list">
        {(search.length !== 0 ? filteredResults(partidos) : partidos).map(
          (item) => {
            return (
              <li key={item.id} className="list-item">
                <div className="match">
                  <p>{formatDate(item.datetime)}</p>
                  <img
                    src={`./flags/${item.home_team_country}.svg`}
                    alt={item.home_team.name}
                  />
                  <p>
                    {item.home_team.name} {item.home_team.goals} vs{" "}
                    {item.away_team.goals} {item.away_team.name}
                  </p>
                  <img
                    src={`./flags/${item.away_team_country}.svg`}
                    alt={item.away_team.name}
                  />
                </div>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default MiApi;
