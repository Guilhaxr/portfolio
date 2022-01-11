import "./css/Window.css"
import "./css/ProjectBox.css"
import {BrowserRouter as Router,Link} from "react-router-dom"


const ProjectBox = ({ techsLogos, key, date, description, url, techs, image}) => {

  

   return(

      

    <div   key={key}  >
       <div className="cardProject">
       <div className="logoProject">
               <img src={image} alt="logo" />
            </div>
       </div>
            
            <div className="contentProject">
               <p className="descriptionProject">{description}</p>
               <p className="dateAndLine">Duration: {date}</p>
               <div className="line"></div>
               <div className="AllTechsLogo">
                  {techsLogos.map((item)=> <div className ="techsLogo"> <img  src={item}  alt="techs"/> </div>)}
               </div>
                  <button className="VisitButton" onClick={()=> window.open(url, "_blank")}> <span>CHECK IT</span></button> 
            </div>
    </div>
  
   )
}

export default ProjectBox;