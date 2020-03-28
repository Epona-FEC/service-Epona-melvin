/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import HalfStar from '../components/HalfStar.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('HalfStar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HalfStar />);
  });

  it('Should shallow', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
