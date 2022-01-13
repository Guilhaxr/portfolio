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
                foto
            </div>
            <div className="splitLeftSide">
                <div className="aboutMe">
                    aboute
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