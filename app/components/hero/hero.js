
import React, { PropTypes, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import classNames from 'classnames/bind';

import Loader from '../../components/loader/loader';

import styles from './style.scss';

const cx = classNames.bind(styles);


class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  /* set current index
     - index is used to reference the correct item in the data array (carousel slides).
     - default index set to 0 to reference the first item in the data array.
     - Updating the index updates which title, syopsis and imageurl is accessed from data array is displayed.
  */

  setCurrentIndex(index) {
    this.setState({
      index,
    });
  }

  render() {

    // items of carousel returned from api data
    const { items } = this.props.data;

    // currently selected item
    const { title, synopsis, imageurl } = items[this.state.index];

    // setup nav items
    const heroNavItems = items.map((item, index) => {

      // dynamically apply active class to selected nav item
      const navItemClass = cx([
        styles['hero-nav-item'], {
          [styles['hero-nav-item-active']]: index === this.state.index,
        },
      ]);

      return (
        <li className={navItemClass} key={index}>
          <span onClick={() => this.setCurrentIndex(index)}>
            <img className={styles['hero-nav-image']} src={item.imageurl} alt={item.title} />
          </span>
        </li>
      );
    });

    // show loader while waiting for data
    if (!items.length) {
      return <Loader size="1" />;
    }

    // react transition group used to apply animation to images

    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>

        <div className={styles['hero']}>

          <ReactCSSTransitionGroup
            className={styles['hero-assets']}
            transitionName="scale"
            transitionAppear
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionAppearTimeout={1000}>

            <div className={styles['hero-asset']} key={this.state.index} style={{ backgroundImage: `url(${imageurl})` }} />

          </ReactCSSTransitionGroup>

          <div className={styles['hero-detail']}>
            <h2 className={styles['hero-detail-title']}>{title}</h2>
            <p className={styles['hero-detail-description']}>{synopsis}</p>
          </div>

          <footer className={styles['hero-footer']}>
            <ul className={styles['hero-nav']}>
              {heroNavItems}
            </ul>
          </footer>

        </div>

      </ReactCSSTransitionGroup>
    );
  }

}

Hero.propTypes = {
  data: PropTypes.object,
};

export default Hero;
