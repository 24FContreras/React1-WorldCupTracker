import "./ListItem.css";

const ListItem = (props) => {
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

  const getGroup = () => {
    const groups = [
      {
        group: "A",
        teams: ["QAT", "NED", "SEN", "ECU"],
      },
      {
        group: "B",
        teams: ["ENG", "USA", "WAL", "IRN"],
      },
      {
        group: "C",
        teams: ["MEX", "POL", "ARG", "KSA"],
      },
      {
        group: "D",
        teams: ["TUN", "AUS", "DEN", "FRA"],
      },
      {
        group: "E",
        teams: ["CRC", "JPN", "ESP", "GER"],
      },
      {
        group: "F",
        teams: ["MAR", "BEL", "CRO", "CAN"],
      },
      {
        group: "G",
        teams: ["SRB", "CMR", "BRA", "SUI"],
      },
      {
        group: "H",
        teams: ["KOR", "GHA", "URU", "POR"],
      },
    ];

    return groups.map((item) => {
      if (
        item.teams.includes(props.home_team_country) &&
        props.stage === "First stage"
      ) {
        return `Group ${item.group}`;
      }
    });
  };

  return (
    <li className="list-item">
      {props.stage === "First stage" ? (
        <p className="list-group">{getGroup()}</p>
      ) : null}
      <p className="list-header">{formatDate(props.datetime)}</p>
      <div className="match">
        <div className="home-team">
          <img
            src={
              props.home_team_name !== "To Be Determined"
                ? `./assets/flags/${props.home_team_country}.svg`
                : `./assets/flags/TBD.svg`
            }
            alt={props.home_team_name}
          />
          <p>{props.home_team_name}</p>
        </div>

        <p>
          <span className="list-score">
            {props.home_team_goals}{" "}
            {props.home_team_penalties
              ? `(${props.home_team_penalties})`
              : null}
          </span>{" "}
          vs{" "}
          <span className="list-score">
            {props.away_team_goals}{" "}
            {props.away_team_penalties
              ? `(${props.away_team_penalties})`
              : null}{" "}
          </span>{" "}
        </p>

        <div className="away-team">
          <p>{props.away_team_name}</p>
          <img
            src={
              props.away_team_name !== "To Be Determined"
                ? `./assets/flags/${props.away_team_country}.svg`
                : `./assets/flags/TBD.svg`
            }
            alt={props.away_team_name}
          />
        </div>
      </div>
    </li>
  );
};

export default ListItem;
