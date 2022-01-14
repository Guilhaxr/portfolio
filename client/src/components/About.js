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
                <img src="https://cvws.icloud-content.com/B/Aaiz7pQsLVy7hDeh6qhR_9YraUFYAembJ2e4THl3pXivdUpFWsH7Av7_/fotoSemFundo.png?o=AqC8WV-pYz8Y9E7b--k5euAUpccvdv2E_owShiOrtjwy&v=1&x=3&a=CAogw8iUJe2JpvBxVVdjEhxVmATaDJYKnDCE7EnDtLjgitcSbxDNqJTO5S8Y7Z_LzuUvIgEAUgQraUFYWgT7Av7_aifCCFYAtNC6hskyglQ-bFsB0F0LxJYVpuVlrcT9A_QdCkBNq1NUvbRyJ96QblyoSBf6WoTQcvHqW4gaIKBWLjtXjtIcBz1azUKZffAxp_CwLQ&e=1642184495&fl=&r=6d3d66a8-1a1f-4582-88f5-8000ff7c23a3-1&k=jQ3Pw2Q66TeHfg3YXupW2w&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=52&s=NkBm8Y9I8m7RguQtERwvwQGdbVs&cd=i" alt="myPhoto" />
                <h4>Guilherme Rodrigues</h4>
                <h6>Full Stack Web Developer</h6>
            </div>
            <div className="splitLeftSide">
                <div className="aboutMe">
                    <h5>About Me</h5>
                    <p>I started my professional career as a bartender. I mixed some joy and creativity and then I served many cocktails full of flavors and stories.
                        I also learnt how to communicate and share experiences but at some point I felt that was time to embrace a new challenge that would give me the possibility to learn more. Basically, I wanted to overcome myself.
                        I decided to study Web Development at bootcamp Wild Code School for five months.
                        It was an intensive and very challenging course because I had to learn very quickly some programming vocabulary, languages and technologies.
                        I also developed mini-games and applications which two of them were in "Hackathon" format. </p>
                </div>
                <div className="techSkills">
                    <h1>Skills</h1>
                    <div className="skillBox">
                        <p>Javascript</p>
                        <p>65%</p>
                            <div className="skill">
                                <div className="skill-level" style={{width:"75%"}}></div>
                            </div>
                    </div>
                    <div className="skillBox">
                        <p>React.js</p>
                        <p>65%</p>
                            <div className="skill">
                                <div className="skill-level" style={{width:"60%"}}></div>
                            </div>
                    </div>
                    <div className="skillBox">
                        <p>HTML</p>
                        <p>65%</p>
                            <div className="skill">
                                <div className="skill-level"></div>
                            </div>
                    </div>
                    <div className="skillBox">
                        <p>CSS</p>
                        <p>65%</p>
                            <div className="skill">
                                <div className="skill-level"></div>
                            </div>
                    </div>
                    <div className="skillBox">
                        <p>Node.js</p>
                        <p>65%</p>
                            <div className="skill">
                                <div className="skill-level"></div>
                            </div>
                    </div>
                    <div className="skillBox">
                        <p>Express</p>
                        <p>65%</p>
                            <div className="skill">
                                <div className="skill-level"></div>
                            </div>
                    </div>
                    <div className="skillBox">
                        <p>MondoDB</p>
                        <p>65%</p>
                            <div className="skill">
                                <div className="skill-level"></div>
                            </div>
                    </div>
                    <div className="skillBox">
                        <p>MYSQL</p>
                        <p>65%</p>
                            <div className="skill">
                                <div className="skill-level"></div>
                            </div>
                    </div>
                </div>
            </div>
           


            
        </div>
    </div>
    )
}

export default About;