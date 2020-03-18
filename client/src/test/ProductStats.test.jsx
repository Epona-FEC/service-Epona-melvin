/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import ProductStats from '../components/ProductStats.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('ProductStats', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProductStats />);
  });

  it('Should shallow', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it(' has default props, inserted in correct locations', () => {
    expect(wrapper.find('.shop-rating-picture').props().children[1]).toBe(5);
    expect(wrapper.find('.total-shop-reviews').props().children[1]).toBe(323);
  });
});
