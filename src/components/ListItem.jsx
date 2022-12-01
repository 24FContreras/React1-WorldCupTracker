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

  return (
    <li className="list-item">
      <div className="match">
        <p>{formatDate(props.datetime)}</p>
        <img
          src={`./flags/${props.home_team_country}.svg`}
          alt={props.home_team_name}
        />
        <p>
          {props.home_team_name} {props.home_team_goals} vs{" "}
          {props.away_team_goals} {props.away_team_name}
        </p>
        <img
          src={`./flags/${props.away_team_country}.svg`}
          alt={props.away_team_name}
        />
      </div>
    </li>
  );
};

export default ListItem;
