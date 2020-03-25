import React from 'react';
import PropTypes from 'prop-types';

const ImageCarousel = ({
  photos, slideInNextImages, slideInPrevImages, styles,
}) => (
  <div className='carousel-container'>
    <button
      type='button'
      className="review-prev-button"
      onClick={slideInPrevImages}
    >
      &lt;
    </button>
    <button
      type='button'
      className="review-next-button"
      onClick={slideInNextImages}
    >
      &gt;
    </button>
    <div
      className='carousel-slide'
      style={styles}
    >
      {photos.map((photo) => <img className='review-carousel-photo' src={photo.url} alt={photo.description} />)}
    </div>

  </div>
);


ImageCarousel.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  slideInPrevImages: PropTypes.func,
  slideInNextImages: PropTypes.func,
  styles: PropTypes.shape({
    transform: PropTypes.string,
  }),
};

ImageCarousel.defaultProps = {
  photos: [
    {
      url: 'https://source.unsplash.com/random/200x200',
      description: 'Purchase of a customer',
    },
    {
      url: 'https://source.unsplash.com/random/200x200',
      description: 'Purchase of a customer',
    },
  ],
  slideInPrevImages: () => null,
  slideInNextImages: () => null,
  styles: {
    transform: 'translateX(0)',
  },
};


export default ImageCarousel;
