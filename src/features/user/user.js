import { useSelector } from 'react-redux';

const User = () => {
  const login = useSelector((state) => state.user.user.login);
  return <section>{login && <h2>{login}</h2>}</section>;
};

export default User;
