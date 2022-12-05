import "./MatchCard.css";

const MatchCard = (props) => {
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

  const getStatus = () => {
    if (
      props.status === "future_scheduled" ||
      props.status === "future_unscheduled"
    )
      return <p className="status">{formatDate(props.datetime)}</p>;
    if (props.status === "in_progress")
      return (
        <p className="status">
          <i className="fa-solid fa-futbol"></i> Live {props.time}
        </p>
      );
    if (props.status === "completed") return <p className="status">Finished</p>;
  };

  return (
    <article className="today-match-card">
      <div
        className={`card-header ${
          props.status === "in_progress" ? "live" : "regular"
        } `}
      >
        {getStatus()}
      </div>
      <div className="team">
        <div>
          <img
            src={`./flags/${props.home_country}.svg`}
            alt={props.home_name}
          />
          <p>{props.home_name}</p>
        </div>
        <div className="score">
          {props.home_goals}{" "}
          {props.home_penalties ? `(${props.home_penalties})` : null}
        </div>
      </div>
      <div className="team">
        <div>
          <img
            src={`./flags/${props.away_country}.svg`}
            alt={props.away_name}
          />
          <p>{props.away_name}</p>
        </div>
        <div className="score">
          {" "}
          {props.away_goals}{" "}
          {props.away_penalties ? `(${props.away_penalties})` : null}
        </div>
      </div>
    </article>
  );
};

export default MatchCard;
