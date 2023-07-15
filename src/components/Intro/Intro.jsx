import React, { useEffect, useRef, useState } from 'react'
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";

const Intro = () => {
    const [isSpeaker, setIsSpeaker] = useState(false);
    const videoRef = useRef(null)
    const handleSpeaker = function(e) {
        setIsSpeaker(!isSpeaker) 
    }

    useEffect(()=>{

        if(isSpeaker){
            videoRef.current.muted = !isSpeaker
            videoRef.current.volume = 1
        } else {
            videoRef.current.volume = 0
        }
    }, [isSpeaker])

    return (
        <div className='relative'>
            <video 
                ref={videoRef}
                muted autoPlay loop 
                className='vid'
                preload="auto"
            >
                <source type='video/mp4' src='https://file.hstatic.net/1000362795/file/1209121110_47c2c353e790488ebf065d2087fc7bc8.mp4'></source>
            </video>
            <div onClick={handleSpeaker} className='text-white absolute bottom-[15%] right-[50px] text-[40px] cursor-pointer'>
                {!isSpeaker? <GiSpeakerOff></GiSpeakerOff> : <GiSpeaker></GiSpeaker>}
            </div>
        </div>
    )
}

export default Intro