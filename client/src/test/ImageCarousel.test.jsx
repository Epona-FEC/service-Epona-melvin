/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import ImageCarousel from '../components/ImageCarousel.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('ImageCarousel', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ImageCarousel />);
  });

  it('Should shallow', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Function should be invoked, when prevButton is called', () => {
    let counter = 0;
    const func = () => { counter += 1; };
    wrapper.setProps({ slideInPrevImages: func });
    wrapper.find('.review-prev-button').simulate('click');
    expect(counter).toBe(1);
  });

  it('Function should be invoked, when nextButton is called', () => {
    let counter = 0;
    const func = () => { counter += 1; };
    wrapper.setProps({ slideInNextImages: func });
    wrapper.find('.review-next-button').simulate('click');
    expect(counter).toBe(1);
  });
});
