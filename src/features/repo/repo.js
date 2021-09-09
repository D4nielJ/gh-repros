import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepo } from './repoSlice';
import Navbar from '../navbar/navbar';

const Repo = ({ owner, name }) => {
  const dispatch = useDispatch();
  const repo = useSelector((state) => state.repo.repo);

  useEffect(() => {
    const url = `${owner}/${name}`;
    dispatch(fetchRepo(url));
  }, [owner, name]);

  return (
    <section>
      <Navbar title={repo.name} />
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
    </section>
  );
};

Repo.propTypes = {
  owner: PropTypes.string,
  name: PropTypes.string,
};

Repo.defaultProps = {
  owner: '',
  name: '',
};

export default Repo;
