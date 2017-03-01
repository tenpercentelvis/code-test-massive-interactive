
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Example from './component';
import * as actions from './actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

const ExampleContainer = connect(mapStateToProps, mapDispatchToProps)(Example);

export default ExampleContainer;
