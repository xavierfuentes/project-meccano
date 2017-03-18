import React from 'react';
import { shallow } from 'enzyme';

import Root from '../index';

describe('<Root />', () => {
  it('renders without crashing', () => {
    shallow(<Root />);
  });
});
