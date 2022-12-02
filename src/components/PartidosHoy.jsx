import { useState, useEffect } from "react";
import MatchCard from "./MatchCard";
import "./PartidosHoy.css";

const PartidosHoy = () => {
  const [partidosHoy, setPartidosHoy] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://worldcupjson.net/matches/today");
      const data = await res.json();

      setPartidosHoy(data);
    };

    fetchData();
  }, []);
  return (
    <section className="today-section">
      <h2>Partidos de hoy</h2>
      <div className="today-grid">
        {partidosHoy.length !== 0 ? (
          partidosHoy.map((partido) => {
            return (
              <MatchCard
                key={partido.id}
                status={partido.status}
                datetime={partido.datetime}
                time={partido.time}
                home_country={partido.home_team_country}
                home_name={partido.home_team.name}
                home_goals={partido.home_team.goals}
                away_country={partido.away_team_country}
                away_name={partido.away_team.name}
                away_goals={partido.away_team.goals}
              />
            );
          })
        ) : (
          <p>No Games today</p>
        )}
      </div>
    </section>
  );
};

export default PartidosHoy;
