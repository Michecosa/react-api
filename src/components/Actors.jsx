import { useState, useEffect } from "react";
import axios from "axios";
import ActorsCard from "./ActorsCard";

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
      <div className="row g-3 custom-cards">
        {loading && <ActorsCard actors={actors} />}
      </div>
    </>
  );
}
