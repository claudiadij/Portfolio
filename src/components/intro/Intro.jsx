import React from 'react';
import "./Intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
             showCursor: true, 
             backDelay: 1500,
             backSpeed:60,
             strings: [" Creative.", " Developer.", " Learner."],
        });
    },[])

    return (
        <div className="intro" id="intro">
            <div className="backgroundintro">
                <img src="assets/background.jpeg" alt="computer-image"/>
                <div className="text">
                    <div className="top">
                        <h2>Hi, my name is</h2>
                        <h1>Claudia Dijmarescu</h1>
                    </div>
                    <div className="bottom">
                        <h3>And I'm a 
                            <span ref={textRef}></span>
                        </h3>
                    </div>
                </div>      
            
            </div>
            
        </div>
    )
}

