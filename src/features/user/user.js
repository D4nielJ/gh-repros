import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../home/home';
import { fetchRepos, fetchUser } from './userSlice';

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
      {user && (
        <div className="flex justify-center">
          {user.avatar_url && (
            <div className="w-1/2 p-3">
              <div class="aspect-h-1 aspect-w-1 relative">
                <img
                  alt={id}
                  className="bg-bh-blue mix-blend-overlay inset-0 w-full h-full object-cover absolute rounded-full"
                  src={user.avatar_url}
                />
              </div>
            </div>
          )}
          <div class="w-1/2 px-3 py-10">
            {user.name && <h2>{user.name}</h2>}
            {user.html_url && (
              <a href={user.html_url} target="_blank">
                <h3>{user.login}</h3>
              </a>
            )}
            <div>
              {user.followers && <span>{user.followers}</span>}
              {user.following && <span>{user.following}</span>}
              {user.public_repos && <span>{user.public_repos}</span>}
            </div>
          </div>
        </div>
      )}
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
