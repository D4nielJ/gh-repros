import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const history = useHistory();

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
