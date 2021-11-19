import React from 'react';
import "./Aboutme.scss";
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Aboutme() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["Who am I?", "What do I do?", "Where am I from?"],
        });
    },[])

    return (
        <div className="aboutme" id="aboutme">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="title">
                    <h1>
                        <h1 className="hyphen">-</h1>
                        About Me
                        <h1 className="hyphen">-</h1>
                    </h1>
                    <h2>
                        <span ref={textRef}/>
                    </h2>
                    <p>
                        I am a first generation Romanian/Greek American based in New Britain, Connecticut. This past August, I graduated from the University of Connecticut and then spent the following three months attending the Coding Temple Bootcamp. 
                        I started off with a passion in graphic design. While working in graphic design, I was tasked with building websites. My enjoyment for improving websites became a new space for me to express my creativity.
                    </p>
                    <p>
                    I love creating intricate websites for a clean user experience.
                        Having the ability to put ideas to physical programs with the creative freedom drives me to being the engineer that I am. 
                        Outside of my work life, I am a traveling enthusiast and passionate about architecture and sculpture. 
                    </p>
                    
                        <a href="/assets/resume.pdf" download="Resume">
                            <button>Download CV</button>
                        </a>

                </div> 
            </div>
        </div>
    )
}

