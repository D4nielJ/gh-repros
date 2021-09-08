import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../home/search';
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
    <section>
      <Search />
      <div className="user">
        {id && <h2>{id}</h2>}
        {user.avatar_url && (
          <div>
            <img alt={id} height="150" width="150" src={user.avatar_url} />
          </div>
        )}
        {user.followers && <span>{user.followers}</span>}
        {user.following && <span>{user.following}</span>}
        {user.public_repos && <span>{user.public_repos}</span>}
      </div>
      <ul className="repos">{reposLi}</ul>
    </section>
  );
};

User.propTypes = {
  id: PropTypes.string,
};

User.defaultProps = {
  id: '',
}

export default User;
