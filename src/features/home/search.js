import { useState } from 'react';

const Search = () => {
  const [user, setUser] = useState('');
  const handleUser = (e) => {
    setUser(e.target.value);
  };

  return (
    <form>
      <input type="text" name="search" id="search" value={user} onChange={handleUser} />
      <button type="submit">Search user</button>
    </form>
  );
};

export default Search;
