const endpointActresses = "https://lanciweb.github.io/demo/api/actresses/";
const endpointActors = "https://lanciweb.github.io/demo/api/actors/";
import Actors from "./components/Actors";

function App() {
  return (
    <>
      <Actors
        actorsEndpoint={endpointActors}
        endpointActresses={endpointActresses}
      />
    </>
  );
}

export default App;
