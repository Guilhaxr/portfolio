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
                <img src="https://cvws.icloud-content.com/B/Aaiz7pQsLVy7hDeh6qhR_9YraUFYAembJ2e4THl3pXivdUpFWsH7Av7_/fotoSemFundo.png?o=Ampqq4JXSbBjFkWTyLuw45khKwPSgkLcU5Y8Ukq3nwnq&v=1&x=3&a=CAogqbohXVvfJCc-cLDPR8QkJ05PdYjeZeCioqpcaKNYUncSbxCP1_zC5S8Yr86zw-UvIgEAUgQraUFYWgT7Av7_aic5ZkjwpqCcJ2HA_TTvujJm9KeuiBW79BjOXWn3jWg0T3Q1S5Hkan5yJ6Du4L7KssSw_AEV6uTozxWBLKsIsRc3TvljelcXlFZ3Lb4jz1FEgg&e=1642161039&fl=&r=ee223b31-9a2a-4449-8f75-f4ff56a9f522-1&k=jQ3Pw2Q66TeHfg3YXupW2w&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=52&s=PGJxFNiWPprSr4K6KOQqUT5x4M8&cd=i" alt="myPhoto" />
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
                <div className="skills">
                    skills
                </div>
                
            </div>
           


            
        </div>
    </div>
    )
}

export default About;