/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import ReviewPhotos from '../components/ReviewPhotos.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('ReviewPhotos', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReviewPhotos />);
  });

  it('Should shallow', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it(' has default props, inserted in correct locations', () => {
    expect(wrapper.find('img').first().props().src).toBe('https://source.unsplash.com/random/200x200');
    expect(wrapper.find('img').first().props().alt).toBe('Purchase of a customer');
  });
});
