import React from 'react';
import "./Experience.scss";
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Experience() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["What have I done?", "How long have I done it?"],
        });
    },[])

    return (
        <div className="experience" id="experience">
            <div className="title">
                <h1>
                    <h1 className="hyphen">-</h1>
                    My Experience
                    <h1 className="hyphen">-</h1>
                </h1>
                <h2>
                    <span ref={textRef}/>
                </h2>
            </div>
            <div className="body">
                <div className="cards">
                    <div className="card card1">
                        <div className="container">
                            <img src="assets/ethiopia.jpg" alt="water-basin" />
                        </div>
                        <div className="details">
                            <h3>National Science Foundation</h3>
                            <p>
                                As a Full Stack Developer, I rebuilt the UConn PIRE Project site, 
                                and was tasked with a key role to make data available for use by both American and Ethiopian data engineers. 
                                I Communicated with Ethiopian engineers with the task to deploy a website that could overcome language barriers. 
                                I retrieved key information and crafted Wet and Dry Season forecasts by studying Ethiopia’s precipitation trends.

                            </p>
                        </div>
                    </div>
                    <div className="card card2">
                        <div className="container">
                            <img src="assets/eversource.jpg" alt="light-bulb" />
                        </div>
                        <div className="details">
                            <h3>Eversource Energy Center</h3>
                            <p>
                                During my Full Stack Engineering role at Eversource Energy, 
                                I was charged with developing and launching customized, highly responsive website solutions using advanced technologies. 
                                I led the development of the website remodel and was responsible for all forecasting content from our legacy system to the new platform. 
                                This was all done as I simultaneously worked for NSF.
                            </p>
                        </div>
                    </div>
                    <div className="card card3">
                        <div className="container">
                            <img src="assets/coding.jpg" alt="coding" />
                        </div>
                        <div className="details">
                            <h3>Coding Temple</h3>
                            <p>
                                As of August of 2021, I wanted to enhance my experience with the languages I have been using and joined the Coding Temple bootcamp, 
                                which was able to provide me with hands-on project experiences. 
                                I developed an E-Commerce website with full cart functionality an authentication and
                                created a return on investment calculator to analyze data on financial gains.
                            </p>
                        </div>
                    </div>
                </div> 
                <a href="https://www.linkedin.com/in/claudia-dijmarescu/">
                    <button>LinkedIn</button>
                </a>
            </div>           
        </div>
    )
}
