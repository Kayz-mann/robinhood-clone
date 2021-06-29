import "./App.css";
import Header from "./component/Header";
import NewsFeed from "./component/Newsfeed";
import Stats from "./component/Stats";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <NewsFeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
