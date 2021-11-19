import React from 'react';
import "./Contact.scss";
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import { Person, Room, Email, LinkedIn, GitHub } from "@material-ui/icons";
import { useState } from "react";

export default function Contact() {

    const textRef = useRef();
    const [message, setMessage] = useState(false);

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["How can you reach me?", "How should we get in touch?", "How can I contact you?"],
        });
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };

    return (
        <div className="contact" id="contact">
            <div className="left">
                <form onSubmit={handleSubmit}>
                    <input className="email" type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll get back to you ASAP!</span>}
                </form>
            </div>
            <div className="right">
                <div className="title">
                    <h1>
                        <h1 className="hyphen">-</h1>
                        Contact Me
                        <h1 className="hyphen">-</h1>
                    </h1>
                    <h2>
                        <span ref={textRef}/>
                    </h2>
                    <h3>
                        Feel free to check out my LinkedIn and GitHub for more information about myself and my projects!
                        Also fill out the form if you're looking for a website-design consultation and I will get back to you within (1) business day.
                    </h3>
                </div>
                
                <div class="aboutmebox">
                    <div class="icons">
                        <div class="row">
                            <Person className="icon"/>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Claudia Dijmarescu</div>
                            </div>
                        </div>
                        <div class="row">
                            <Room className="icon"/>
                            <div class="info">
                                <div class="head">Based In</div>
                                <div class="sub-title">New Britain, Connecticut</div>
                            </div>
                        </div>
                        <div class="row">
                            <Email className="icon"/>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">claudiamdijmarescu@gmail.com</div>
                            </div>
                        </div>
                        <div class="row">
                            <LinkedIn className="icon"/>
                            <div class="info">
                                <div class="head">LinkedIn</div>
                                <div class="sub-title">
                                    <a href="https://www.linkedin.com/in/claudia-dijmarescu/">https://www.linkedin.com/in/claudia-dijmarescu/</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <GitHub className="icon"/>
                            <div class="info">
                                <div class="head">GitHub</div>
                                <div class="sub-title">
                                    <a href="https://github.com/claudiadij">https://github.com/claudiadij</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
