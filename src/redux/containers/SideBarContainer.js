import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import * as actions from '../actions'
import getSideBarState from '../selectors/getSideBarState';
import SideBar from '../../components/features/SideBar';

const mapStateToProps = state => getSideBarState(state);

const connectToStore = connect(mapStateToProps, actions);


export default compose(connectToStore)(SideBar);
