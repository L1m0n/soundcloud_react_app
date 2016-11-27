import cofigureStore from './stores/configStore';
import Stream from './components/Stream';
import * as actions from './actions';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import React from 'react';


const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

const store = cofigureStore();
render(
    <Provider store={store}>
      <Stream />
    </Provider>,
    document.getElementById('root')
)

store.dispatch(actions.setTracks(tracks));
