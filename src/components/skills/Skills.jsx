import React from 'react';
import "./Skills.scss";

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <div className="left">

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
                        <h2>Firebase</h2><span className="bar"><span className="html"></span></span>
                    </li>
                    <li>
                        <h2>PostgreSQL</h2><span className="bar"><span className="html"></span></span>
                    </li>                                                                              
                    <li>
                        <h2>HTML5</h2><span className="bar"><span className="html"></span></span>
                    </li>
                    <li>
                        <h2>CSS</h2><span className="bar"><span className="css"></span></span>
                    </li>
                </div>
            </div>
        </div>
    )
}
