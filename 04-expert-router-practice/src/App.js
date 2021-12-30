import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import NotFound from "./pages/NotFound";
import SingleQuote from "./pages/SingleQuote";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:id">
          <SingleQuote />
        </Route>
        <Route path="/add">
          <AddQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
