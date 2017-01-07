import {connect} from 'react-redux';
import Stream from '../components/Stream';
import {bindActionCreators } from 'redux';
import * as actions from '../actions'


const mapStateToProps = (state) => {
 const {tracks, activeTrack} = state.track;
 const {user} = state.auth;
 return {
     tracks,
     user,
     activeTrack
 }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: bindActionCreators(actions.auth, dispatch),
        onPlay: bindActionCreators(actions.playTrack, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Stream);