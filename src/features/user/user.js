import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../home/home';
import { fetchRepos, fetchUser } from './userSlice';
import Stats from '../../common/stats/stats';
import Navbar from '../navbar/navbar';

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
        <div className="flex justify-center">
          {user.avatar_url && (
            <div className="w-60 p-4">
              <div class="w-40 h-40 bg-bh-blue rounded-full flex items-center justify-center">
                <div class="w-36 h-36">
                  <div class="aspect-h-1 aspect-w-1 relative">
                    <img
                      alt={id}
                      className="bg-bh-blue mix-blend-overlay inset-0 w-full h-full object-cover absolute rounded-full"
                      src={user.avatar_url}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div class="w-1/2 px-3 flex flex-col justify-center">
            {user.name && <h2 className="font-bold text-white text-2xl">{user.name}</h2>}
            {user.html_url && (
              <a className="text-white underline" href={user.html_url} target="_blank">
                <h3>@{user.login}</h3>
              </a>
            )}
            {user && (
              <Stats
                followers={user.followers}
                following={user.following}
                repos={user.public_repos}
              />
            )}
          </div>
        </div>
      )}
      <h3 className="px-4 py-1 text-white font-bold uppercase bg-bh-darkBlue">Repositories</h3>
      <ul className="repos">{reposLi}</ul>
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
