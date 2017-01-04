import React from 'react';

const Stream =({tracks = [], onAuth })=>{
	return (

		<div>
			<div>
				<button onClick={onAuth} type="button">
					Login
				</button>
			</div>
	      {
	        tracks.map((track, key) => {
	          return <div key={key} className="track">{track.title}</div>;
	        })
	      }
	    </div>
	)
}

export default Stream