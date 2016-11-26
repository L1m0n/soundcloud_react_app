import React from 'react';

const Stream =({tracks = [] })=>{
	return (
		<div>
	      {
	        tracks.map((track) => {
	          return <div className="track">{track.title}</div>;
	        })
	      }
	    </div>
	)
}

export default Stream