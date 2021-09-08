import { Switch, Route, useLocation } from 'react-router-dom';
import Search from '../features/home/search';
import User from '../features/user/user';

const useQuery = () => new URLSearchParams(useLocation().search);

const App = () => {
  const query = useQuery();

  return (
    <div className="App">
      <Switch>
        <Route path="/user">
          <User id={query.get('id')} />
        </Route>
        <Route exact path="/">
          <Search />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
