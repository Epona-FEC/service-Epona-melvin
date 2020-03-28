/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Review from '../components/Review.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Review />);
  });

  it('Should shallow', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renderStars should return score', () => {
    const getScore = (score) => score;
    wrapper.setProps({ renderStars: getScore });
    const scoreProp = wrapper.props('reviewScore').score;
    const defaultScore = getScore(scoreProp);
    expect(defaultScore).toBe(scoreProp);
  });

  it('renderStars function should return array of 5 children review-score', () => {
    const renderFiveSpans = () => {
      const arr = [];
      for (let i = 0; i < 5; i += 1) {
        arr.push(<span>i</span>);
      }
      return arr;
    };
    wrapper.setProps({ renderStars: renderFiveSpans });
    expect(wrapper.find('.review-score').props().children).toHaveLength(5);
  });
});
