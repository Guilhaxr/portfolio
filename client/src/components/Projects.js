import axios from "axios";
import "./css/Window.css"
import "./css/carousel.css"
import React, { useState, useEffect } from "react";
import ProjectBox from "./ProjectBox";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel} from 'react-responsive-carousel';
import{FaArrowRight, FaArrowLeft} from "react-icons/fa";





const Projects = ({HandlerButton}) => {

    const [data, setData] = useState();
    const [zoom, setZoom] = useState(false);



    useEffect(()=>{
        axios
            .get(`/api/projects`)
            .then((res)=> setData(res.data))
            .catch((err)=>{ console.log(err)})
    }, []);


    // const smallZoom = {
    //     // height: "83vh",
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

           
        <Carousel showThumbs={false} showStatus={false}  showIndicators={false} renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button className="arrow-carousel" type="button" onClick={onClickHandler} title={label} style={{left:"15px"}}>
                    <FaArrowLeft />
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button  className="arrow-carousel" type="button" onClick={onClickHandler} title={label} style={{right:"15px"}} >
                        <FaArrowRight />
                    </button>
                )
            } 
            >
        
            {data && data.map((item, i)=>
      
                            <ProjectBox 
                                image={item.image}
                                techsLogos={item.techsLogos}
                                
                                key={i}
                                date={item.date}
                                description={item.description}
                                techs={item.techs}
                                url={item.url}
                            />
            )}
         </Carousel>
        </div>
    </div>

      
    )

}

export default Projects;