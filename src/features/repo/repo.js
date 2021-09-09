import PropTypes from 'prop-types';
import GhPolyglot from 'gh-polyglot';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MarkGithubIcon, EyeIcon, StarIcon, RepoForkedIcon } from '@primer/octicons-react';
import { fetchRepo } from './repoSlice';
import Navbar from '../navbar/navbar';
import Chart from '../../common/chart';

const token = process.env.REACT_APP_PTOKEN;

const exampleValues = [
  {
    label: 'JavaScript',
    value: 22549,
    color: '#f1e05a',
  },
  {
    label: 'SCSS',
    value: 6722,
    color: '#c6538c',
  },
  {
    label: 'HTML',
    value: 1496,
    color: '#e34c26',
  },
];

const Repo = ({ owner, name }) => {
  const dispatch = useDispatch();
  const repo = useSelector((state) => state.repo.repo);
  const repoStatus = useSelector((state) => state.repo.status);
  const [repoData, setRepoData] = useState(null);
  const [error, setError] = useState({ active: false, type: 200 });
  const url = `${owner}/${name}`;

  useEffect(() => {
    dispatch(fetchRepo(url));
  }, [owner, name]);

  useEffect(() => {
    setRepoData(exampleValues);
  }, []);

  // const me = new GhPolyglot(url);

  // useEffect(() => {
  //   me.repoStats((err, stats) => {
  //     if (err) {
  //       console.error('Error:', err);
  //       setError({ active: true, type: 400 });
  //     }
  //     console.log(stats);
  //     setRepoData(stats);
  //   });
  // }, [owner, name]);

  return (
    <section className="min-h-screen bg-bh-lightBlue text-white">
      {repoStatus === 'fulfilled' && (
        <>
          <Navbar title={repo.name} />
          <article className="flex flex-col items-end px-4 pt-8">
            <div className="mb-4">
              <a target="_blank" href={repo.html_url} className="flex items-center hover:text-gray-200 transition-all">
                <h2 className="font-black text-2xl text-right mr-2">{repo.full_name}</h2>
                <MarkGithubIcon size={20} />
              </a>
            </div>
            <p className="max-w-prose text-right mb-8">{repo.description}</p>
            {repoData ? (
              <div className="w-full mb-8 self-center bg-white px-6 pt-6 pb-3 rounded-xl shadow">
                <Chart data={repoData} />
              </div>
            ) : (
              <p>Number of requests over the limit.</p>
            )}
            <div className="mb-1">
              <EyeIcon className="mr-1" />
              <span className="mr-2">{repo.watchers_count}</span>
              <StarIcon className="mr-1" />
              <span className="mr-2">{repo.stargazers_count}</span>
              <RepoForkedIcon className="mr-1" />
              <span className="mr-2">{repo.forks_count}</span>
            </div>
            <div className="mb-2">{(repo.size / 1000).toFixed(2)} kb</div>
            {repo.license && <div className="mb-1">{repo.license.name}</div>}
            {repo.owner && (
              <a target="_blank" href={repo.owner.html_url} className="underline text-lg font-bold hover:text-gray-200 transition-all">
                Owner: @{repo.owner.login}
              </a>
            )}
          </article>
        </>
      )}
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
