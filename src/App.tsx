import "./App.css";
import Fold from "./components/layout/Fold";
import Layout from "./components/layout/Layout";
import Intro from "./sections/intro/Intro";

function App() {
  return (
    <>
      <Fold />
      <Layout>
        <Intro />
      </Layout>
    </>
  );
}

export default App;
