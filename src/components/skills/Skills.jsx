import React from 'react';
import "./Skills.scss";
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Skills() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["What do I know?", "How well do I know it?", "What can I do?"],
        });
    },[])

    return (
        <div className="skills" id="skills">
            <div className="left">
                <div className="title">
                    <h1>
                        <h1 className="hyphen">-</h1>
                        My Skills
                        <h1 className="hyphen">-</h1>
                    </h1>
                    <h2>
                        <span ref={textRef}/>
                    </h2>
                    <p>
                        I provide a positive attitude, showing great resilience in any task that needs to be completed. 
                        I am self taught in Python, Javascript, HTML, CSS, ReactJS, and multiple other frameworks. 
                        I have been able to practice what I learned for nearly three years working simultaneously for two reputable companies serving a role as a Full Stack Engineer for both.
                        I solidified my knowledge and gained an expertise in other new frameworks by completing a four month coding bootcamp.
                    </p>
                    <p>    
                        My two strongest coding languages are Python and Javascript, as well as the ReactJS and Flask frameworks.
                        They are the tools I use most in all of my web apps. 
                        I'm a fast learner and am able to adapt my logic to different languages very quickly.
                    </p>
                    <a href="#experience">
                        <button>Read More</button>
                    </a>
                </div>
            </div>
            <div className="right">
                <div className="bars">
                    <li>
                        <h2>Python</h2><span className="bar"><span className="python"></span></span>
                    </li>
                    <li>
                        <h2>Javascript</h2><span className="bar"><span className="javascript"></span></span>
                    </li>
                    <li>
                        <h2>Flask</h2><span className="bar"><span className="flask"></span></span>
                    </li>
                    <li>
                        <h2>ReactJS</h2><span className="bar"><span className="reactjs"></span></span>
                    </li>
                    <li>
                        <h2>Firebase</h2><span className="bar"><span className="firebase"></span></span>
                    </li>
                    <li>
                        <h2>PostgreSQL</h2><span className="bar"><span className="postgresql"></span></span>
                    </li>                                                                              
                    <li>
                        <h2>HTML5</h2><span className="bar"><span className="html5"></span></span>
                    </li>
                    <li>
                        <h2>CSS</h2><span className="bar"><span className="css"></span></span>
                    </li>
                </div>
            </div>
        </div>
    )
}
