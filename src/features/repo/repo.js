import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepo } from './repoSlice';
import Navbar from '../navbar/navbar';
import { MarkGithubIcon } from '@primer/octicons-react';

const Repo = ({ owner, name }) => {
  const dispatch = useDispatch();
  const repo = useSelector((state) => state.repo.repo);

  useEffect(() => {
    const url = `${owner}/${name}`;
    dispatch(fetchRepo(url));
  }, [owner, name]);

  return (
    <section className="min-h-screen bg-bh-lightBlue text-white">
      <Navbar title={repo.name} />
      <article className="flex flex-col items-end px-4 pt-8">
        <div className="flex items-center mb-4">
          <h2 className="font-black text-2xl text-right mr-2">{repo.name}</h2>
          <a target="_blank" href={repo.html_url}>
            <MarkGithubIcon size={20} className="" />
          </a>
        </div>
        {repo.owner && (
          <a target="_blank" href={repo.owner.html_url} className="underline">
            @{repo.owner.login}
          </a>
        )}
        <p className="max-w-prose text-right">{repo.description}</p>
      </article>
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
