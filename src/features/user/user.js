import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../home/search';
import { fetchRepos, fetchUser, resetStatus } from './userSlice';

const User = ({ id }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.user.userStatus);
  const reposStatus = useSelector((state) => state.user.reposStatus);
  const repos = useSelector((state) => state.user.repos);

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUser(id));
    }
    return dispatch(resetStatus());
  }, [id]);

  useEffect(() => {
    if (reposStatus === 'idle') {
      dispatch(fetchRepos(id));
    }
  }, [id]);

  const reposLi = repos.map((repo) => <li key={repo.id}>{repo.name}</li>);

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

export default User;
