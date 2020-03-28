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

  it('renderStars when function is called, should manipulate reviewScore prop', () => {
    const addOne = (val) => val + 1; // Default reviewScore is 5.
    wrapper.setProps({ renderStars: addOne });
    expect(wrapper.find('.shop-rating-picture').props().children[1].props.children).toBe(6);
  });
});
