import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson  } from 'enzyme-to-json';

import CardList from './CardList';

it('renders without crashing', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'john',
            username: 'JohnJohn',
            email: 'John@gmail.com'
        }
    ]
  const wrapper = shallow(<CardList robots={mockRobots} />)
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
