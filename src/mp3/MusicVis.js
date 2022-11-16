import React, {useState, useEffect, useRef} from 'react';


const MusicVis = (props) => {
  return (
    <div>
        <svg>
            <circle r={props.size} cx="100" cy="100" fill='#555'/>
            <circle r={props.progress * props.size} cx="100" cy="100" fill='#A59'/>
        </svg>
    </div>
  )
}

export default MusicVis