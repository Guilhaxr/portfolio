import axios from "axios";
import "./css/Window.css"
import React, { useState, useEffect } from "react";
import ProjectBox from "./ProjectBox";

const Projects = ({HandlerButton}) => {

    // const [data, setData] = useState();

    // useEffect(()=>{

    //     axios
    //         .get(`/api/projects`)
    //         .then((res)=> setData(res.data))
    //         .catch((err)=>{ console.log(err)})
    // }, []);
    

    const [zoom, setZoom] = useState(false)



    const smallZoom = {
        height: "50vh",
    }

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


<div className="window-container" style={zoom ? maxZoom : smallZoom} >
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
            {/* {data && data.map((item, i)=>
                    <ProjectBox 
                        name={item.name}
                        key={i}
                        date={item.date}
                        description={item.description}
                        techs={item.description}
                        // url={item.url}
                    />
                )} */}
        </div>
    </div>

      
    )

}

export default Projects;