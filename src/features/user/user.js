import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos } from './userSlice';

const User = ({ id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const repos = useSelector((state) => state.user.repos);
  const userStatus = useSelector((state) => state.user.status);
  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchRepos(id));
    }
  });
  return (
    <section>
      {id && <h2>{id}</h2>}
    </section>
  );
};

export default User;
