import { useState, useEffect } from "react";
import axios from "axios";
import ActorsCard from "./ActorsCard";

export default function Actors({ actorsEndpoint, actressesEndpoint }) {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(actorsEndpoint)
      .then((res) => {
        setActors(res.data);
      })
      .catch((err) => console.error(err));
  }, [actorsEndpoint]);

  useEffect(() => {
    axios
      .get(actressesEndpoint)
      .then((res) => {
        setActors((prev) => [...prev, ...res.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [actressesEndpoint]);

  return (
    <>
      <div className="container my-4">
        {loading || <ActorsCard actors={actors} />}
      </div>
    </>
  );
}
