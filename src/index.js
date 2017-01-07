import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {CLIENT_ID, REDIRECT_URI} from './constants/auth';
import {syncHistoryWithStore} from 'react-router-redux';
import cofigureStore from './stores/configStore';
import Callback from './components/Callback';
import Stream from './containers/Stream';
import {Provider} from 'react-redux';
import App from './components/App';
import {render} from 'react-dom';
import SC from 'soundcloud';
import React from 'react';

SC.initialize({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI
});



const store = cofigureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} >
            <Route path='/' component={App} >
                <IndexRoute component={Stream} />
                <Route path="/" component={Stream} />
                <Route path="/callback" component={Callback} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

//store.dispatch(actions.setTracks(tracks));
