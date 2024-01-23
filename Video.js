import React from 'react';
import video from './Assests/titlevideo.mp4'
import { useNavigate } from 'react-router-dom';
import './Video.css';

const VideoPlayer = () => {
 const navigate = useNavigate();

 return (
    <div style={{position: 'relative', width: '100%', height: '100%'}}>
      <video src={video} controlsList="nodownload" autoPlay playsInline loop muted style={{objectFit: 'cover', width: '100%', height: '90%'}} />
      <div className="centered-text">
        <button className="video-player-button" onClick={() => {navigate("/shop") }}>Get Started</button>
      </div>
      </div>
 );
};

export default VideoPlayer;