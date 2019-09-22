import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { merge } from 'lodash';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Image = ({
  image,
  width,
  height,
  imageStyle,
  margin,
}) => {
  const defaultStyle = {
    objectFit: 'cover',
    objectPosition: 'center',
  };

  return (
    <Container margin={margin}>
      <LazyLoadImage
        src={image}
        alt="name"
        effect="opacity"
        width={width}
        height={height}
        style={merge(defaultStyle, imageStyle)}
      />
    </Container>
  );
};

Image.propTypes = {
  image: PropTypes.shape({
    logo: PropTypes.shape({
      filename_url: PropTypes.string,
      base_url: PropTypes.string,
      filename: PropTypes.string,
    }),
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        filename_url: PropTypes.string.isRequired,
        base_url: PropTypes.string.isRequired,
        filename: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  imageStyle: PropTypes.shape({}),
  margin: PropTypes.string,
};

Image.defaultProps = {
  imageStyle: {},
  margin: '0',
};

export default Image;
