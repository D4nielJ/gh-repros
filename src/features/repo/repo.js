import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepo } from './repoSlice';

const Repo = ({ owner, name }) => {
  const dispatch = useDispatch();
  const repo = useSelector((state) => state.repo.repo);

  useEffect(() => {
    console.log(name);
    dispatch(fetchRepo(owner, name));
  }, []);

  return (
    <div>
      Hello
      {' '}
      {name}
      {' '}
      and
      {' '}
      {owner}
      {' '}
      and
      {' '}
      {repo.owner && <div>{repo.owner.login}</div>}
    </div>
  );
};

Repo.propTypes = {
  owner: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Repo;
