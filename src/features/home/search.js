import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUser } from '../user/userSlice';

const Search = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const id = useSelector((state) => state.user.user.login);
  const history = useHistory();

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUser(user));
    history.push(`/user?id=${user}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" id="search" value={user} onChange={handleUser} />
      <button type="submit">Search user</button>
    </form>
  );
};

export default Search;
