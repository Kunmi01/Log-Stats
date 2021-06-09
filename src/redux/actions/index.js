import UPDATE_LOGS from './action-types';

const updateLogs = (apiUrl) => async (dispatch) => {
  try {
    setInterval(async () => {
      const logsData = await (await fetch(apiUrl)).json();
      dispatch({ type: UPDATE_LOGS, payload: logsData });
    }, 2000);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err.message);
  }
};

export default updateLogs;
