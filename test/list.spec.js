import React from 'react';
import ActiveView from '../src/components/list';
import {
  mount,
  shallow,
} from 'enzyme';

describe('<List />',  () => {

	it('displays 5 list items', () => {
    const wrapper = mount(<List />)
    expect(wrapper.find('ListItem')).to.equal(5)
  });
});