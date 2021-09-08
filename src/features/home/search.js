import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../user/userSlice';

const Search = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState('');

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
    </form>
  );
};

export default Search;
