import React, {useState, useEffect, useRef} from 'react';
import './music.css'
const MusicList = (props) => {

    let trackElements = props.tracks.map((track) => (

      <div className={props.curPlaying.id == track.id ? "active" : ""} key={track.id} onClick={() => {props.onSelected(track.id)}}> {track.title} </div>
    ));

  return (
    <div>
        {trackElements}
    </div>
  )
}

export default MusicList