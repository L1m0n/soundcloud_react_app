import * as actionTypes from '../constants/actionTypes';

const initialState = [];

const setTracks = (state, action) => {
    const {tracks} = action;
    return [ ...state, ...tracks];
}

export default (state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.TRACKS_SET:
            return setTracks(state, action)
        default:
            return state
    }
}
