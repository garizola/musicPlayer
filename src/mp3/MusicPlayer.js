import React, {useState, useEffect, useRef} from 'react';
import MusicList from './MusicList';
import PlayWidget from './PlayWidget';
import MusicVis from './MusicVis';


const MusicPlayer = (props) => {

    const [tracks, setTracks] = useState([]);
    const [curPlaying, setCurPlaying] = useState({});
    const [curProgress, setCurProgress] = useState(0);

    useEffect(() => {
    fetch("music.json")
        .then((res) => res.json())
        .then((data) => {
            
            setTracks(data);
        });
       
    }, [])
    

  return (
    <div>
        <h1>MUSIC PLAYER</h1>
        <div> Now Playing: {curPlaying.title} - {curProgress * 100}% complete</div>
        <MusicList curPlaying={curPlaying} tracks={tracks} onSelected={ (id) => {trackSelected(id)}}/>


        <PlayWidget currentTrack={curPlaying} setCurProgress={setCurProgress}/>

        <MusicVis size={50} progress={curProgress}/>
    </div>
  );





  function trackSelected(id) {
    const foundTrack = tracks.find((track) => track.id == id);
    setCurPlaying(foundTrack);
  }
}

export default MusicPlayer