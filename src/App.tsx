import "./App.css";
import Fold from "./components/layout/Fold";
import Contact from "./sections/contact/Contact";
import Intro from "./sections/intro/Intro";
import Partners from "./sections/partners/Partners";
import Prime from "./sections/prime/Prime";
import Program from "./sections/program/Program";
import Tickets from "./sections/tickets/Tickets";

function App() {
  return (
    <>
      <Fold />
      <Prime />
      <Intro />
      <Tickets />
      <Program />
      <Contact />
      <Partners />
    </>
  );
}

export default App;
