import "./css/Window.css"
import { useState } from "react"


const About = ({HandlerButton}) => {
    const [zoom, setZoom] = useState(false)



    // const smallZoom = {
    //     height: "50vh",
    // }

    const maxZoom = {
        height: "86vh",
        width: "100vw",
        position: "absolute",
        top: "0px",
        left: "0px"
    }

    const handlerZoom = () =>{
        setZoom(!zoom);
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
        <div className="windowInformation">
            {/* <p>hellooo My name is G </p>
            <p>My projects</p> */}
        </div>
    </div>
    )
}

export default About;