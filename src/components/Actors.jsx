import { useState, useEffect } from "react";
import axios from "axios";

export default function Actors({ actorsEndpoint, endpointActresses }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios
      .get(actorsEndpoint)
      .then((res) => setActors(res.data))
      .catch((err) => console.error("Errore nel caricamento:", err));
  }, []);

  return (
    <>
      <h1>Ciau</h1>
      {console.log(actors)}
    </>
  );
}
