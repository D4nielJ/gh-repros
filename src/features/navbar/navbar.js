/* eslint-disable react/prop-types */
import { useHistory } from 'react-router-dom';
import { ChevronLeftIcon, SearchIcon } from '@primer/octicons-react';

const Navbar = ({ title }) => {
  const history = useHistory();

  const handleChevron = () => {
    history.goBack();
  };

  const handleSearch = () => {
    history.push('/');
  };

  return (
    <div className="bg-bh-darkBlue flex justify-between items-center px-4 py-2">
      <button
        type="button"
        className="text-white cursor-pointer hover:text-gray-200 transition-all"
        onClick={handleChevron}
        onKeyDown={() => {}}
      >
        <ChevronLeftIcon size={20} />
      </button>
      <span className="uppercase text-white text-sm font-bold">{title}</span>
      <button
        type="button"
        className="text-white cursor-pointer hover:text-gray-200 transition-all"
        onClick={handleSearch}
        onKeyDown={() => {}}
      >
        <SearchIcon size={20} />
      </button>
    </div>
  );
};

export default Navbar;
