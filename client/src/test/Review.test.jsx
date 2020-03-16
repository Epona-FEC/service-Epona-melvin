/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from '../components/Review.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('Should shawllow', () => {
    const wrapper = shallow(<Review />);
    console.log(wrapper.length);
  });
});
