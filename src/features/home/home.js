import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
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
    <section className="px-4 py-40 flex flex-col items-center bg-bh-black min-h-screen">
      <h1 className="font-black text-5xl italic tracking-tighter text-bh-lightBlue mb-8">repros</h1>
      <form
        onSubmit={handleSubmit}
        className="md:w-1/3 flex flex-col justify-center items-center bg-bh-lightBlue px-6 py-12 rounded"
      >
        <h2 className="w-3/4 text-center text-xl text-bh-black mb-4">
          Search on GitHub
        </h2>
        <input
          type="text"
          name="search"
          id="search"
          value={user}
          onChange={handleUser}
          placeholder="Username"
          className="md:w-3/4 text-center text-bh-blue font-bold rounded px-1 py-2 mb-4"
        />
        <button
          className="w-1/2 flex items-center justify-center rounded-md bg-bh-black hover:bg-bh-blue text-white px-1 py-2"
          type="submit"
        >
          Go!
        </button>
      </form>
    </section>
  );
};

export default Search;
