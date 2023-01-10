import { useState, useEffect } from "react";
import MatchCard from "../MatchCard/MatchCard";
import "./PartidosHoy.css";
import matchesJson from "../../matches.json";

const PartidosHoy = () => {
  const todayDate = new Date().toISOString().slice(0, 10);

  const [partidosHoy, setPartidosHoy] = useState(matchesJson);

  useEffect(() => {
    const filtrado = () => {
      const partidosDeHoy = partidosHoy.filter(
        (item) => item.datetime.slice(0, 10) === todayDate
      );

      setPartidosHoy(partidosDeHoy);
    };

    filtrado();
  }, []);

  return (
    <section className="today-section" id="today">
      <h2>
        <i className="fa-regular fa-futbol"></i> Playing today
      </h2>
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
                home_penalties={partido.home_team.penalties}
                away_country={partido.away_team_country}
                away_name={partido.away_team.name}
                away_goals={partido.away_team.goals}
                away_penalties={partido.away_team.penalties}
              />
            );
          })
        ) : (
          <p className="text-center">No Games today</p>
        )}
      </div>
    </section>
  );
};

export default PartidosHoy;
