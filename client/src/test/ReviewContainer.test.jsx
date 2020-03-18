/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import ReviewContainer from '../components/ReviewContainer.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('ReviewContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReviewContainer />);
  });

  it('Should shallow, intial sampledata', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('See more button is visible if more than 4 reviews', () => {
    expect(wrapper.contains(<button className="more-reviews-button" type="button">See More</button>)).toBe(true);
  });

  // Test see more button not to be there when state array is less than 4
  it('See more button is visible if more than 4 reviews', () => {
    wrapper.setState({productReviews: [1, 2, 3] });
    expect(wrapper.contains(<button className="more-reviews-button" type="button">See More</button>)).toBe(false);
  });

  // Reviews for items should be selected intially
  it('Initial state for selected reviews should be product', () => {
    expect(wrapper.state().selectedReviews).toBe('product');
  });

  // When Reviews for shop is clicked, selected reviews state should change
  it('When Reviews for shop is clicked, selected reviews should be shop', () => {
    wrapper.find('.shop-review-button').simulate('click');
    expect(wrapper.state().selectedReviews).toBe('shop');
  });

  // https://www.etsy.com/listing/737189527/crystal-bridal-headband-crystal-bridal?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=&ref=sc_gallery-1-1&plkey=1d3e3fe8f64cca5ea1d347e588198c8c1651a52e%3A737189527&pro=1&frs=1

  // Has more than four reviews and less than 20, shows the rest of the array when see more is clicked

  //https://www.etsy.com/listing/535133523/new-colors-unicorn-horns-indvidual-or?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=&ref=sr_gallery-1-5&bes=1&col=1

  // Has more than 20 reviews, when see more is clicked a Read All reviews is shown

});
