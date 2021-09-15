import Comunity from "../Comunity";
import Feed from "../Feed";
import Hero from "../Hero";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <div className="max-w-screen-sm mx-auto py-6">
        <Comunity />
        <Feed />
      </div>
    </div>
  );
}
