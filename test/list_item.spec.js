import React from 'react';
import ListItem from '../src/components/list_item'
import { expect } from 'chai'
import {
  mount,
  shallow
} from 'enzyme';

describe('<ListItem />',  () => {
	
const props = {
	image: 'http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg',
	description: 'imagine and image',
	active: true
	}

const wrapper = mount(<ListItem image={props.image} description={props.description} />)

	it('displays a thumbnail', () => {
		const image = wrapper.find('img')
    expect(image.length).to.equal(1)
    expect(image.prop('href')).to.be(props.image)
  });

  it('contains an active class if active', () => {
  	const wrapper = mount(<ListItem />)
  	expect(wrapper.find('ListItem')).to.be.present()
  });

  it('renders a description', () => {
    const description = wrapper.find('description')
    expect(description.length).to.equal(1)
  });

  it('calls clickhandler on click', () => {
  	const wrapper = mount(<ListItem />)
  	expect(wrapper.find('ListItem')).to.be.selected()
  });
});