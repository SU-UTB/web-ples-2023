import "./App.css";
import Fold from "./components/layout/Fold";
import Intro from "./sections/intro/Intro";
import Program from "./sections/program/Program";
import Tickets from "./sections/tickets/Tickets";

function App() {
  return (
    <>
      <Fold />
      <Intro />
      <Tickets />
      <Program />
    </>
  );
}

export default App;
