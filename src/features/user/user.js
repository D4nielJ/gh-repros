import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRepos, fetchUser } from './userSlice';
import Stats from '../../common/stats/stats';
import Navbar from '../navbar/navbar';
import { RepoIcon } from '@primer/octicons-react';

const User = ({ id }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.user.repos);

  useEffect(() => {
    if (id !== user.login) {
      dispatch(fetchUser(id));
      dispatch(fetchRepos(id));
    }
  }, [id]);

  const reposLi = repos.map((repo) => (
    <li key={repo.id}>
      <Link to={`/repo?owner=${repo.owner.login}&name=${repo.name}`}>{repo.name}</Link>
    </li>
  ));

  return (
    <section className="min-h-screen bg-bh-lightBlue">
      <Navbar title={user.name} />
      {user && (
        <div className="flex">
          {user.avatar_url && (
            <div className="w-44 py-4 pl-4">
                <div class="w-36 h-36">
                  <div class="aspect-h-1 aspect-w-1 relative rounded-full border-4 border-bh-darkBlue">
                    <img
                      alt={id}
                      className="bg-bh-blue mix-blend-overlay inset-0 w-full h-full object-cover absolute rounded-full"
                      src={user.avatar_url}
                    />
                  </div>
              </div>
            </div>
          )}
          <div class="w-1/2 px-3 flex flex-col justify-center">
            {user.name && <h2 className="font-bold text-white text-2xl leading-tight">{user.name}</h2>}
            {user.html_url && (
              <a className="text-white underline mb-2" href={user.html_url} target="_blank">
                <h3>@{user.login}</h3>
              </a>
            )}
            {user && (
              <Stats
                followers={user.followers}
                following={user.following}
              />
            )}
          </div>
        </div>
      )}
      <div className="px-4 py-1 text-white bg-bh-darkBlue flex justify-between items-center">
        <h3 className="font-bold uppercase">Repositories</h3>
        <span>
          <RepoIcon size={16} className="mr-1" />
          <span className="font-bold">{user.public_repos}</span>
        </span>
      </div>
      <ul className="repos grid grid-cols-2">{reposLi}</ul>
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
