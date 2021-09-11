import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { RepoIcon } from '@primer/octicons-react';
import FlipMove from 'react-flip-move';

import { fetchRepos, fetchUser } from './userSlice';

import Stats from '../../common/stats';
import Navbar from '../navbar/navbar';
import RepoPreview from './repoPreview';

const User = ({ id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const repos = useSelector((state) => state.user.repos);

  useEffect(() => {
    if (id !== user.login) {
      dispatch(fetchUser(id));
      dispatch(fetchRepos(id));
    }
  }, [id]);

  const [sortType, setSortType] = useState('Stars');
  const [reposSorted, setReposSorted] = useState([]);

  const handleSortType = (e) => {
    setSortType(e.target.value);
  };

  const getTopRepos = (type) => {
    const map = {
      Stars: 'stargazers_count',
      Forks: 'forks_count',
      Size: 'size',
    };
    const sortProperty = map[type];
    const sorted = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty]);

    setReposSorted(sorted);
  };

  useEffect(() => {
    if (repos.length) {
      getTopRepos(sortType);
    }
  }, [repos]);

  useEffect(() => {
    getTopRepos(sortType);
  }, [sortType]);

  return (
    <section className="min-h-screen bg-bh-lightBlue">
      <Navbar title={user.name} />

      {user && (
        <div className="flex">
          {user.avatar_url && (
            <div className="w-44 py-4 pl-6">
              <div className="w-36 h-36">
                <div className="aspect-h-1 aspect-w-1 relative rounded-full border-2 border-bh-darkBlue">
                  <img
                    alt={id}
                    className="bg-bh-blue inset-0 w-full h-full object-cover absolute rounded-full"
                    src={user.avatar_url}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="w-1/2 px-3 flex flex-col justify-center">
            {user.name && (
              <h2 className="font-bold text-white text-2xl leading-tight">{user.name}</h2>
            )}
            {user.html_url && (
              <a
                className="text-white underline mb-2 text-sm hover:text-gray-200 transition-all"
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <h3>
                  @
                  {user.login}
                </h3>
              </a>
            )}
            {user && <Stats followers={user.followers} following={user.following} />}
          </div>
        </div>
      )}

      <div className="px-4 py-1 text-white  bg-bh-blue flex justify-between items-center">
        <div className="flex">
          <span className="mr-1">
            <RepoIcon size={16} className="mr-1" />
            <span className="font-bold">{user.public_repos}</span>
          </span>
          <h3 className="uppercase">Repos</h3>
        </div>
        <div className="flex">
          <p className="mr-1">Sort by:</p>
          <select className="text-bh-black" value={sortType} onChange={(e) => handleSortType(e)}>
            <option value="Stars">Stars</option>
            <option value="Forks">Forks</option>
            <option value="Size">Size</option>
          </select>
        </div>
      </div>
      {reposSorted.length > 0 ? (
        <FlipMove typeName="ul" className="grid grid-cols-2">
          {reposSorted.map((repo) => (
            <RepoPreview key={repo.id} repo={repo} />
          ))}
        </FlipMove>
      ) : (
        <p className="text-center pt-4 text-white font-bold">
          No repos available :c, try sorting the list
        </p>
      )}
    </section>
  );
};

User.propTypes = {
  id: PropTypes.string,
};

User.defaultProps = {
  id: '',
};

export default User;
