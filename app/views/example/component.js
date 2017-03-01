
import React, { PropTypes, Component } from 'react';

import Hero from '../../components/hero/hero';

class Example extends Component {

  // get data from api when component mounts

  componentDidMount() {

    const { getData } = this.props.actions;

    getData();
  }

  // render component

  render() {

    // get example data
    const { example } = this.props;

    // render hero component with data
    return (
      <Hero data={example} />
    );
  }
}

Example.propTypes = {
  example: PropTypes.object,
  actions: PropTypes.object,
};

export default Example;
