import { useState, useEffect } from "react";
import axios from "axios";

export default function Actors({ actorsEndpoint, actressesEndpoint }) {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(actorsEndpoint)
      .then((res) => {
        setActors(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [actorsEndpoint]);

  return (
    <>
      <h1>Ciau</h1>
      {loading && console.log(actors)}
    </>
  );
}
