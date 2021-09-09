import { PeopleIcon, PersonIcon } from '@primer/octicons-react';

const Stats = ({ followers, following, repos }) => (
  <div className="text-sm text-white">
    {following && (
      <div>
        <PersonIcon size={16} className="mr-1" />
        <span className="mr-1">
          <span className="font-bold">{following}</span> Following
        </span>
      </div>
    )}
    {followers && (
      <div>
        <PeopleIcon size={16} className="mr-1" />
        <span className="mr-1">
          <span className="font-bold">{followers}</span> Followers
        </span>
      </div>
    )}
  </div>
);

export default Stats;
