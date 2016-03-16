import React from 'react';
import ActiveView from '../src/components/active_view';
import {
  mount,
  shallow,
} from 'enzyme';

describe('<ActiveView />', () => {
const props = {
		image: 'http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg',
		description: 'imagine and image',
		active: true
	}
const wrapper = mount(<ActiveView image={props.image} description={props.description} />)

	it('displays in the active window', () => {
  	const image = wrapper.find('img')
  	expect(image.length).to.equal(1)
  	expect(image.prop('href')).to.be(props.image)
  });

  it('renders a description', () => {
    const description = wrapper.find('description')
    expect(description.length).to.equal(1)
  });
});