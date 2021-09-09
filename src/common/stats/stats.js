const Stats = ({ followers, following, repos }) => (
  <div>
    {followers && <span>{followers}</span>}
    {following && <span>{following}</span>}
    {repos && <span>{repos}</span>}
  </div>
);

export default Stats;
