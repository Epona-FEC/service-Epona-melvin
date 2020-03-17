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

  it(' has default props', () => {
    const objData = {
      product: {
        name: 'Test Data',
        id: 1,
        photoUrl: 'https://picsum.photos/id/237/200/300',
      },
      review: {
        date: new Date('Tue Mar 17 2020 16:08:19 GMT-0700 (Pacific Daylight Time)'),
        score: 5,
        body: 'This a test',
        photoUrl: 'https://picsum.photos/id/237/200/300',
      },
      reviewer: {
        avatar: 'http://www.gravatar.com/avatar/?d=identicon',
        username: 'Melvin',
      },
    };

    expect(wrapper.find('.reviewer-name').props().children).toEqual('Melvin');
    expect(wrapper.find('.review-score').props().children).toEqual(objData.review.score);
    expect(wrapper.find('.review-date').props().children).toEqual(objData.review.date.toString());
    expect(wrapper.find('.product-icon').props().src).toEqual(objData.product.photoUrl);
    expect(wrapper.find('.review-product-data a').props().href).toEqual('/listing/1');
    expect(wrapper.find('.review-product-data a').props().children).toEqual('A Cool Product');
  });
});
