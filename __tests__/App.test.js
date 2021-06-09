import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import store from '../src/redux/store';

import App from '../src/App';

describe('App', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <App apiUrl="http://localhost:4000/logs" />
    </Provider>
  );

  it('renders DUMB component', () => {
    expect(wrapper).toHaveLength(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
