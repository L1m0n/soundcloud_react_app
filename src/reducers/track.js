import * as actionTypes from '../constants/actionTypes';

const initialState = {
    tracks: [],
    activeTrack:null
};

const setTracks = (state, action) => {
    const {tracks} = action;
    return { ...state, tracks};
};

const setPlay = (state, action) => {
  const {track} = action;
  return {
      ...state,
      activeTrack: track
  }
};

export default (state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.TRACKS_SET:
            return setTracks(state, action);
        case actionTypes.TRACK_PLAY:
            return setPlay(state, action);
        default:
            return state
    }
}
