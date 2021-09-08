import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from '../features/home/search';
import User from '../features/user/user';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route exact path="/">
          <Search />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
