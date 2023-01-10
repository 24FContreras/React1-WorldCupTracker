import { useEffect, useState } from "react";
import MatchCard from "../MatchCard/MatchCard";
import "./Playoffs.css";
import matchesJson from "../../matches.json";

const Playoffs = () => {
  const [playoffData, setPlayoffData] = useState(matchesJson);

  return (
    <section className="playoffs" id="playoffs">
      <h2>
        <i className="fa-solid fa-trophy"></i> Elimination Bracket
      </h2>
      <div className="playoffs-tree">
        <div className="round-of-16">
          <h3 className="round-title">ROUND OF 16</h3>
          {playoffData
            .sort((a, b) => a.id - b.id)
            .map((item) =>
              item.stage_name === "Round of 16" ? (
                <MatchCard
                  key={item.id}
                  status={item.status}
                  datetime={item.datetime}
                  time={item.time}
                  home_country={
                    item.home_team.name === "To Be Determined"
                      ? "TBD"
                      : item.home_team_country
                  }
                  home_name={item.home_team.name}
                  home_goals={item.home_team.goals}
                  home_penalties={item.home_team.penalties}
                  away_country={
                    item.away_team.name === "To Be Determined"
                      ? "TBD"
                      : item.away_team_country
                  }
                  away_name={item.away_team.name}
                  away_goals={item.away_team.goals}
                  away_penalties={item.away_team.penalties}
                />
              ) : null
            )}
        </div>
        <div className="quarter-finals">
          <h3 className="round-title">QUARTER-FINALS</h3>
          {playoffData
            .sort((a, b) => a.id - b.id)
            .map((item) =>
              item.stage_name === "Quarter-final" && item.id % 2 === 0 ? (
                <MatchCard
                  key={item.id}
                  status={item.status}
                  datetime={item.datetime}
                  time={item.time}
                  home_country={
                    item.home_team.name === "To Be Determined"
                      ? "TBD"
                      : item.home_team_country
                  }
                  home_name={item.home_team.name}
                  home_goals={item.home_team.goals}
                  home_penalties={item.home_team.penalties}
                  away_country={
                    item.away_team.name === "To Be Determined"
                      ? "TBD"
                      : item.away_team_country
                  }
                  away_name={item.away_team.name}
                  away_goals={item.away_team.goals}
                  away_penalties={item.away_team.penalties}
                />
              ) : null
            )}
          {playoffData
            .sort((a, b) => a.id - b.id)
            .map((item) =>
              item.stage_name === "Quarter-final" && item.id % 2 !== 0 ? (
                <MatchCard
                  key={item.id}
                  status={item.status}
                  datetime={item.datetime}
                  time={item.time}
                  home_country={
                    item.home_team.name === "To Be Determined"
                      ? "TBD"
                      : item.home_team_country
                  }
                  home_name={item.home_team.name}
                  home_goals={item.home_team.goals}
                  home_penalties={item.home_team.penalties}
                  away_country={
                    item.away_team.name === "To Be Determined"
                      ? "TBD"
                      : item.away_team_country
                  }
                  away_name={item.away_team.name}
                  away_goals={item.away_team.goals}
                  away_penalties={item.away_team.penalties}
                />
              ) : null
            )}
        </div>

        <div className="semi-finals">
          <h3 className="round-title">SEMI-FINALS</h3>
          {playoffData
            .sort((a, b) => a.id - b.id)
            .map((item) =>
              item.stage_name === "Semi-final" ? (
                <MatchCard
                  key={item.id}
                  status={item.status}
                  datetime={item.datetime}
                  time={item.time}
                  home_country={
                    item.home_team.name === "To Be Determined"
                      ? "TBD"
                      : item.home_team_country
                  }
                  home_name={item.home_team.name}
                  home_goals={item.home_team.goals}
                  home_penalties={item.home_team.penalties}
                  away_country={
                    item.away_team.name === "To Be Determined"
                      ? "TBD"
                      : item.away_team_country
                  }
                  away_name={item.away_team.name}
                  away_goals={item.away_team.goals}
                  away_penalties={item.away_team.penalties}
                />
              ) : null
            )}
        </div>
        <div className="final">
          <h3 className="round-title">FINAL</h3>
          {playoffData.map((item) =>
            item.stage_name === "Final" ? (
              <MatchCard
                key={item.id}
                status={item.status}
                datetime={item.datetime}
                time={item.time}
                home_country={
                  item.home_team.name === "To Be Determined"
                    ? "TBD"
                    : item.home_team_country
                }
                home_name={item.home_team.name}
                home_goals={item.home_team.goals}
                home_penalties={item.home_team.penalties}
                away_country={
                  item.away_team.name === "To Be Determined"
                    ? "TBD"
                    : item.away_team_country
                }
                away_name={item.away_team.name}
                away_goals={item.away_team.goals}
                away_penalties={item.away_team.penalties}
              />
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Playoffs;
