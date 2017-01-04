import {React, Component} from 'react';

class Callback extends Component {

    componentDidMount() {
        window.setTimeout(opener.SC.connectCallback, 1);
    }

    render() {
        return(
            <div>
                <p>
                    This page sould close soon.
                </p>
            </div>
        )
    }
}

export default Callback;