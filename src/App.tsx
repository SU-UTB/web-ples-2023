import "./App.css";
import Headline from "./components/headline/Headline";
import Paragraph from "./components/paragraph/Paragraph";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Headline level={1} align="center">
          Pátek 3. 3. 2023 od 19:00
        </Headline>
        <Paragraph align="right">
          Lorem ipsum dolor sit amet consectetur. Integer aliquam fermentum
          suspendisse odio ut a elit curabitur porttitor. Eget turpis urna etiam
          placerat at tristique porttitor mollis adipiscing. Facilisis ultrices
          et sed et in congue nec convallis eget. Felis dui magna vel velit
          convallis dignissim nulla porta felis. Nisl interdum metus faucibus
          dignissim.
        </Paragraph>
      </header>
    </div>
  );
}

export default App;
