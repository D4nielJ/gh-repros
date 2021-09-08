import { Switch, Route, useLocation } from 'react-router-dom';
import Search from '../features/home/search';
import User from '../features/user/user';
import Repo from '../features/repo/repo';

const useQuery = () => new URLSearchParams(useLocation().search);

const App = () => {
  const query = useQuery();

  return (
    <div className="App">
      <Switch>
        <Route path="/user">
          <User id={query.get('id')} />
        </Route>
        <Route path="/repo">
          <Repo owner={query.get('owner')} name={query.get('name')} />
        </Route>
        <Route exact path="/">
          <Search />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
