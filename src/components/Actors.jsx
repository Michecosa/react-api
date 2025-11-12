import { useState, useEffect } from "react";
import axios from "axios";
import ActorsCard from "./ActorsCard";

export default function Actors({ actorsEndpoint, actressesEndpoint }) {
  const [maleActors, setMaleActors] = useState([]);
  const [femaleActors, setFemaleActors] = useState([]);
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(actorsEndpoint)
      .then((res) => setMaleActors(res.data))
      .catch((err) => console.error(err));
  }, [actorsEndpoint]);

  useEffect(() => {
    axios
      .get(actressesEndpoint)
      .then((res) => setFemaleActors(res.data))
      .catch((err) => console.error(err));
  }, [actressesEndpoint]);

  useEffect(() => {
    setActors([...maleActors, ...femaleActors]);
    setLoading(true);
  }, [maleActors, femaleActors]);

  return (
    <div className="container my-4">
      {loading && <ActorsCard actors={actors} />}
    </div>
  );
}
