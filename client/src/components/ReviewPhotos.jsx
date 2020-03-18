import React from 'react';
import PropTypes from 'prop-types';

const ReviewPhotos = ({ photos }) => <div className="photos-container">{photos.map((photo) => <img src={photo.url} alt={photo.description} />)}</div>;

ReviewPhotos.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

ReviewPhotos.defaultProps = {
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
};

export default ReviewPhotos;
