import { Link } from 'react-router-dom';
import { RepoIcon, StarIcon, RepoForkedIcon } from '@primer/octicons-react';

const RepoPreview = ({ repo }) => {
  return (
    <li className="repo-preview py-6 px-4 text-white text-sm">
      <Link
        to={`/repo?owner=${repo.owner.login}&name=${repo.name}`}
        className="h-full flex flex-col justify-between"
      >
        <div className="mb-8">
          <RepoIcon size={16} className="mr-1" />
          <span className="font-bold">{repo.name}</span>
        </div>
        <div className="bottom">
          {repo.language && (
            <div className="mb-1">
              <span className="inline-block h-3 w-3 mr-1 bg-white rounded-full"></span>
              {repo.language}
            </div>
          )}
          <div className="flex justify-between">
            <div>
              <StarIcon size={16} className="mr-1" />
              <span className="mr-1">{repo.stargazers_count}</span>
              <RepoForkedIcon size={16} className="mr-1" />
              {repo.forks_count}
            </div>
            <div>{repo.size} Bytes</div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default RepoPreview;
