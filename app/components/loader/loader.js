
import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './style.scss';

const cx = classNames.bind(styles);

const Loader = ({ size, thickness }) => {

  const loaderClass = cx([
    styles.loader,
    `loader-size-${size}`,
  ]);

  return (
    <div className={loaderClass}>
      <svg className={styles['circular']} viewBox="25 25 50 50">
        <circle className={styles['path']} cx="50" cy="50" r="20" fill="none" strokeWidth={thickness || 2} strokeMiterlimit="10" />
      </svg>
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.string,
  thickness: PropTypes.string,
};

export default Loader;
