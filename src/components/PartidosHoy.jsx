import { useState, useEffect } from "react";
import "./PartidosHoy.css";

const PartidosHoy = () => {
  const [partidosHoy, setPartidosHoy] = useState([]);

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
      const res = await fetch("https://worldcupjson.net/matches/today");
      const data = await res.json();

      setPartidosHoy(data);
    };

    fetchData();
  }, []);
  return (
    <section>
      <h2>Partidos de hoy</h2>
      <div className="today-grid">
        {partidosHoy.map((partido) => {
          return (
            <article key={partido.id} className="today-match-card">
              <div className="card-header">
                {getStatus(partido.status, partido.datetime, partido.time)}
              </div>
              <div className="team">
                <div>
                  <img
                    src={`./flags/${partido.home_team_country}.svg`}
                    alt={partido.home_team.name}
                  />
                  <p>{partido.home_team.name}</p>
                </div>
                <div className="score">{partido.home_team.goals}</div>
              </div>
              <div className="team">
                <div>
                  <img
                    src={`./flags/${partido.away_team_country}.svg`}
                    alt={partido.away_team.name}
                  />
                  <p>{partido.away_team.name}</p>
                </div>
                <div className="score">{partido.away_team.goals}</div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PartidosHoy;
