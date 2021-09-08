import { useSelector } from 'react-redux';

const User = () => {
  const login = useSelector((state) => state.user.user.login);
  return <section>{login && <h1>{login}</h1>}</section>;
};

export default User;
