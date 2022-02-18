import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} element={Home}>
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
