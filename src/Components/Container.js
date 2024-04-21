import react, { useState } from 'react';
import ChatApp from './ChatApp.js';
import VideoApp from './VideoPlayer.js';
import STTButton from './STTButton.js';
function Container() {

    return ( 
        <div className="container">
            <div className="interviewText">
                <ChatApp/>
            </div>
            <div className='virtualHR'>
                <div className='HR'>
                    <VideoApp/>
                </div>
                <div>
                    <STTButton/>
                </div>
            </div>
        </div>
     );
}

export default Container;