import Search from "../features/home/search"

const example = process.env.REACT_APP_EXAMPLE;

const App = () => {
  return (
    <div className="App">
      <Search />
      <div>{example}</div>
    </div>
  );
}

export default App;
