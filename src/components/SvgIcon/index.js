/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import iconsList, { customViewBox } from './Icons';
import styles from './SvgIcon.scss';

const Icon = props => {
  if (!iconsList[props.icon]) return null;

  const style = {
    svg: {
      overflow: 'inherit',
      transform: `rotate(${props.rotate}deg)`,
      transition: '.2s',
      margin: props.margin
    },
    path: {
      fill: props.color || iconsList[props.icon].fill,
      transform: props.transform
    }
  };

  const renderBackground = background => {
    if (background) {
      return <circle cx={25} cy={25} r={25} fill={background || '#FFF'} />;
    }
    return null;
  };

  const renderSvg = (icon, width, height, viewBox, background) => {
    const { transform } = style.path;
    if (!icon) return null;

    return (
      <svg
        style={style.svg}
        width={width}
        height={height || width}
        viewBox={customViewBox[props.icon] || viewBox}
      >
        {renderBackground(background)}
        {icon.map(option => (
          <path
            style={style.path}
            key={option.d}
            {...{ ...option, transform }}
          />
        ))}
      </svg>
    );
  };

  if (!props.text) {
    return renderSvg(
      iconsList[props.icon],
      props.width,
      props.height,
      props.viewBox,
      props.background
    );
  }

  const { text, position } = props.text;
  const wrapperClass = cn({
    [styles.wrapper]: true,
    [styles[position]]: styles[position]
  });
  const textClass = cn({
    [styles[`${position}Text`]]: styles[`${position}Text`]
  });

  return (
    <span className={wrapperClass} style={props.customStyle}>
      <span className={textClass} style={{ color: props.color }}>
        {text}
      </span>
      {renderSvg(
        iconsList[props.icon],
        props.width,
        props.height,
        props.viewBox,
        props.background
      )}
    </span>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
  rotate: PropTypes.string,
  color: PropTypes.string,
  transform: PropTypes.string,
  margin: PropTypes.string,
  text: PropTypes.shape({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
  }),
  background: PropTypes.string,
  customStyle: PropTypes.object // eslint-disable-line
};

Icon.defaultProps = {
  width: '100%',
  height: 0,
  rotate: '0',
  transform: '',
  margin: '0',
  viewBox: '0 0 20 20',
  color: '',
  text: null,
  background: '',
  customStyle: {}
};

export default Icon;
