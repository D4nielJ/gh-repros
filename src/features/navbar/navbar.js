import { ChevronLeftIcon, SearchIcon } from '@primer/octicons-react';

const Navbar = ({ title }) => {
  return (
    <div className="bg-bh-darkBlue flex justify-between items-center px-4 py-2">
      <span className="text-white">
        <ChevronLeftIcon size={20} />
      </span>
      <span className="uppercase text-white text-sm font-bold">{title}</span>
      <span className="text-white"><SearchIcon size={20} /></span>
    </div>
  );
};

export default Navbar;
