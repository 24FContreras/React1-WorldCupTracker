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
      <div className="match">
        <p>{getGroup()}</p>
        <p>{formatDate(props.datetime)}</p>
        <img
          src={
            props.home_team_name !== "To Be Determined"
              ? `./flags/${props.home_team_country}.svg`
              : `./flags/TBD.svg`
          }
          alt={props.home_team_name}
        />
        <p>
          {props.home_team_name} {props.home_team_goals} vs{" "}
          {props.away_team_goals} {props.away_team_name}
        </p>
        <img
          src={
            props.away_team_name !== "To Be Determined"
              ? `./flags/${props.away_team_country}.svg`
              : `./flags/TBD.svg`
          }
          alt={props.home_team_name}
        />
      </div>
    </li>
  );
};

export default ListItem;
