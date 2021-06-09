import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import updateLogs from './redux/actions';
import Stats from './components/Stats';
import Logs from './components/Logs';
import './App.scss';

const App = ({ apiUrl }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLogs(apiUrl));
  }, []);

  return (
    <div className="app">
      <Stats />
      <Logs />
    </div>
  );
};

App.propTypes = {
  apiUrl: PropTypes.string.isRequired
};

export default App;
