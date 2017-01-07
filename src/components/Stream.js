import {CLIENT_ID} from '../constants/auth';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Stream extends Component {
	componentDidUpdate() {
		const audioElement = ReactDOM.findDOMNode(this.refs.audio);

		if (!audioElement) {
			return;
		}

		const {activeTrack} = this.props;

		if (activeTrack) {
			audioElement.play();
		}
		else {
			audioElement.pause();
		}
	}

	render () {
		const {user, tracks = [], activeTrack, onAuth, onPlay} = this.props;

		return (
			<div>
				<div>
                    {
                        user ?
							<div>{user.username}</div> :
							<button onClick={onAuth} type="button">
								Login
							</button>
                    }
				</div>
                {
                    tracks.map((track, key) => {
                        return(
							<div key={key} className="track">
                                {track.origin.title}
								<button type="button" onClick={()=> onPlay(track)}>
									Play
								</button>
							</div>
                        );
                    })
                }
				<div>
                    {
                        activeTrack ?
							<audio id="audio" ref="audio" src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`} ></audio> :
                            null
                    }
				</div>
			</div>
		)
	}
}
/*const Stream =({tracks = [], activeTrack, onAuth, onPlay, user })=>{
	return (
		<div>
			<div>
                {
                    user ?
						<div>{user.username}</div> :
						<button onClick={onAuth} type="button">
							Login
						</button>
                }
			</div>
            {
                tracks.map((track, key) => {
                    return(
						<div key={key} className="track">
                            {track.origin.title}
							<button type="button" onClick={()=> onPlay(track)}>
								Play
							</button>
						</div>
                    );
                })
            }
			<div>
                {
                    activeTrack ?
						<audio id="audio" ref="audio" src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`} ></audio> :
                        null
                }
			</div>
		</div>
	)
};*/

export default Stream