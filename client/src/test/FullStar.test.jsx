/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import FullStar from '../components/FullStar.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('FullStar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FullStar />);
  });

  it('Should shallow', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
