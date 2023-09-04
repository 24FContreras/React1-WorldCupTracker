import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);

    const res = await fetch("url");
    const resData = await res.json();

    setLoading(false);

    return setData(resData);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading };
};

export { useFetchData };
