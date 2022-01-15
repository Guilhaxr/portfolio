import "./css/Window.css"
import "./css/AboutMe.css"
import { useState } from "react"



const About = ({HandlerButton}) => {
    const [zoom, setZoom] = useState(false)



    // const smallZoom = {
    //     height: "50vh",
    // }

    const maxZoom = {
        width: "100vw",
        position: "absolute",
        top: "0px",
        left: "0px"
    }

    const handlerZoom = () =>{
        setZoom(!zoom);
    }

    const windowAboutStyle = {
        display: "flex",
        // justifyContent: "center"
        // width:"100%",
     
    }

    return(
        
    <div className="window-container" style={zoom ? maxZoom : null} >
        <div className="titleBar">
            <div className="buttons">
                <div className="close">
                    <button onClick={HandlerButton} className="closeButton"><strong>x</strong></button>
                </div>
                <div className="minimize">
                    <button onClick={HandlerButton}  className="minimizeButton"><strong>&ndash;</strong></button>
                </div>
                <div className="zoom">
                    <button  onClick={handlerZoom} className="zoomButton"><strong>+</strong></button>
                </div>
            </div>
        </div>
        <div className="windowInformation" style={windowAboutStyle}>
            <div className="personalInformation">
                <img src="https://i.imgur.com/zIIczeX.png" alt="myPhoto" />
                    <h3>GUILHERME RODRIGUES</h3>
                    <h6>FULL-STACK WEB DEVELOPER</h6>
            </div>
            <div className="splitLeftSide">
                <div className="aboutMe">
                    <h3>GET TO KNOW ME</h3>
                    <p>I started my professional career as a bartender. I mixed some joy and creativity and then I served many cocktails full of flavors and stories.
                        I also learnt how to communicate and share experiences but at some point I felt that was time to embrace a new challenge that would give me the possibility to learn more. Basically, I wanted to overcome myself.
                        I decided to study Web Development at bootcamp Wild Code School for five months.
                        It was an intensive and very challenging course because I had to learn very quickly some programming vocabulary, languages and technologies.
                        I also developed mini-games and applications which two of them were in "Hackathon" format. </p>
                </div>
                <div className="techSkills">
                    <h3>HARD-SKILLS</h3>
                    <div className="skillBox">
                        <p>Javascript</p>
                        <p>70%</p>
                            <div className="skill">
                                <div className="skill-level" style={{width:"70%"}}></div>
                            </div>
                    </div>
                    <div className="skillBox">
                        <p>React.js</p>
                        <p>75%</p>
                            <div className="skill">
                                <div className="skill-level" style={{width:"75%"}}></div>
                            </div>
                    </div>
                    <div className="skillBox">
                        <p>HTML</p>
                        <p>85%</p>
                            <div className="skill">
                                <div className="skill-level" style={{width:"85%"}}></div>
                            </div>
                    </div>
                    <div className="skillBox">
                        <p>CSS</p>
                        <p>70%</p>
                            <div className="skill">
                                <div className="skill-level" style={{width:"70%"}}></div>
                            </div>
                    </div>
                    <div className="skillBox">
                        <p>Node.js</p>
                        <p>65%</p>
                            <div className="skill">
                                <div className="skill-level" style={{width:"65%"}}></div>
                            </div>
                    </div>
                    <div className="skillBox">
                        <p>Express</p>
                        <p>65%</p>
                            <div className="skill">
                                <div className="skill-level" style={{width:"65%"}}></div>
                            </div>
                    </div>
                    <div className="skillBox">
                        <p>MongoDB</p>
                        <p>75%</p>
                            <div className="skill">
                                <div className="skill-level" style={{width:"75%"}}></div>
                            </div>
                    </div>
                    <div className="skillBox">
                        <p>MYSQL</p>
                        <p>60%</p>
                            <div className="skill">
                                <div className="skill-level" style={{width:"60%"}}></div>
                            </div>
                    </div>
                </div>
            </div>
           


            
        </div>
    </div>
    )
}

export default About;