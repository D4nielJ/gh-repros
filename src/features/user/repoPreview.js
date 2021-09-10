/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { RepoIcon, StarIcon, RepoForkedIcon } from '@primer/octicons-react';
import { forwardRef } from 'react';

const RepoPreview = forwardRef(({ repo }, ref) => (
  <li ref={ref} className="repo-preview py-6 px-4 text-white text-sm">
    <Link
      to={`/repo?owner=${repo.owner.login}&name=${repo.name}`}
      className="h-full flex flex-col justify-between"
    >
      <div className="mb-6 flex items-center">
        <RepoIcon size={16} className="mr-1" />
        <span className="font-bold text-base truncate">{repo.name}</span>
      </div>

      <div className="bottom">
        {repo.language && (
          <div className="mb-1">
            <span className="inline-block h-3 w-3 mr-1 bg-white rounded-full" />
            {repo.language}
          </div>
        )}
        <div>
          <div className="mb-1">
            <StarIcon size={16} className="mr-1" />
            <span className="mr-1">{repo.stargazers_count}</span>
            <RepoForkedIcon size={16} className="mr-1" />
            {repo.forks_count}
          </div>
          <div>
            {(repo.size / 1000).toFixed(2)}
            {' '}
            kb
          </div>
        </div>
      </div>
    </Link>
  </li>
));

RepoPreview.displayName = 'RepoPreview';

export default RepoPreview;
