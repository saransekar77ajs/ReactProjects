import jokesdata from "./components/jokesdata";
import Jokes from "./components/Jokes";

function Header() {
  return (
    <>
      <h1>Jokes</h1>
    </>
  );
}

function App() {
  const jokeElements = jokesdata.map((joke) => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />;
  });

  return (
    <>
      <h1>
        <Header />
      </h1>
      <main>{jokeElements}</main>
    </>
  );
}

export default App;
