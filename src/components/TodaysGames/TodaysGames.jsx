import "./TodaysGames.css";

import MatchCard from "../MatchCard/MatchCard";
import { useFetchData } from "../../hooks/useFetchData";

const TodaysGames = () => {
  const { data, loading } = useFetchData(
    "https://worldcupjson.net/matches/today"
  );

  return (
    <section className="today-section" id="today">
      <h2>
        <i className="fa-regular fa-futbol"></i> Playing today
      </h2>
      <div className="today-grid">
        {loading ? <p className="text-center">Loading...</p> : null}

        {!loading && data.length
          ? loading.map((partido) => {
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
          : null}

        {!loading && !data.length ? (
          <p className="text-center">No Games today</p>
        ) : null}
      </div>
    </section>
  );
};

export default TodaysGames;
