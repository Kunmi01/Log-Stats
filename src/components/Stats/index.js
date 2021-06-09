import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const Stats = () => {
  const logs = useSelector((state) => state.logs);

  return (
    <div className="stats">
      <h3>Stats</h3>
      {logs && (
        <ul>
          <li>
            INFO
            <br />
            {logs.filter((log) => log.type === 'INFO').length}
          </li>
          <li>
            WARNING
            <br />
            {logs.filter((log) => log.type === 'WARNING').length}
          </li>
          <li>
            ERROR
            <br />
            {logs.filter((log) => log.type === 'ERROR').length}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Stats;
