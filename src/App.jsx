import Card from "./components/Card2";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
      <Card title={"sedans"} color={" hsl(31, 77%, 52%)"} />
      <Card title={"suvs"} color={"hsl(184, 100%, 22%)"} />
      <Card title={"luxurys"} color={"hsl(179, 100%, 13%)"} />
      </div>
    </>
  );
}

export default App;
