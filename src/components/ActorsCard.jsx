export default function ActorsCard({ actors }) {
  return (
    <>
      {actors.map((actor) => (
        <div
          key={actor.id}
          className="card col-12 col-md-6 col-xxl-4"
          style={{ width: "18rem" }}
        >
          <div
            className="flex-shrink-0"
            style={{
              aspectRatio: "1 / 1",
              overflow: "hidden",
            }}
          >
            <img
              src={actor.image}
              className="card-img-top"
              alt={`${actor.name} image`}
            />
          </div>
          <div className="card-body">
            <h3 className="card-title">{actor.name}</h3>
            <p className="card-text fw-semibold">
              {actor.nationality}, <span>{actor.birth_year}</span> -{" "}
              {actor.death_year || <span>Living</span>}
            </p>
            <p className="card-text">{actor.biography}</p>
          </div>
          <div className="card-body">
            <h5>Known for:</h5>
            <ul className="list-group list-group-flush">
              {actor.known_for.map((movie, index) => (
                <li key={index} className="list-group-item">
                  {movie}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-body">
            <h5>Awards:</h5>
            <ul className="list-group list-group-flush">
              {actor.awards.map((award, index) => (
                <li key={index} className="list-group-item">
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
