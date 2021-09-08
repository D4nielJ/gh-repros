import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../user/userSlice';

const Search = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const login = useSelector((state) => state.user.user.login);

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUser(user));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" id="search" value={user} onChange={handleUser} />
      <button type="submit">Search user</button>
      <div>{login}</div>
    </form>
  );
};

export default Search;
