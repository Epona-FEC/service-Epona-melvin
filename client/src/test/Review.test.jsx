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

  it('Should see props when defined in component, has default props', () => {
    const objData = {
      reviewDate: new Date(),
      reviewScore: 5,
      photoUrl: 'https://picsum.photos/200/300',
      reviewBody: 'This is test text',
      photoDescription: 'This user added a phot of their purchase',
    };

    wrapper.setProps(objData);

    expect(wrapper.find('.reviewer-name').props().children).toEqual('Melvin');
    expect(wrapper.find('.review-score').props().children).toEqual(objData.reviewScore);
    expect(wrapper.find('.review-date').props().children).toEqual(objData.reviewDate);
    expect(wrapper.find('img').props().src).toEqual(objData.photoUrl);
    expect(wrapper.find('img').props().alt).toEqual(objData.photoDescription);
    expect(wrapper.find('.review-product-data a').props().href).toEqual('/listing/1');
    expect(wrapper.find('.review-product-data a').props().children).toEqual('Test Data');
  });
});
