import {connect} from 'react-redux';
import Stream from '../components/Stream';
import {bindActionCreators } from 'redux';
import * as actions from '../actions'


const mapStateToProps = (state) => {
 const tracks = state.track;
 return {
     tracks
 }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: bindActionCreators(actions.auth, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);