/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import EmptyStar from '../components/EmptyStar.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('EmptyStar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EmptyStar />);
  });

  it('Should shallow', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
