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

export default formatDate;
