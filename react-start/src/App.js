// import Cleanup from "./components/Cleanup";
// import CoinTracker from "./components/CoinTracker";
// import Effect from "./components/Effect";
import MovieApp from "./routes/MovieApp";
// import TodoList from "./components/Todolist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/hello">
            <h1>Hello</h1>
          </Route>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <MovieApp />
          </Route>
        </Switch>
      </Router>
      {/* <CoinTracker /> */}
      {/* <TodoList />
      <hr />
      <Effect />
      <Cleanup /> */}
    </>
  );
}

export default App;
