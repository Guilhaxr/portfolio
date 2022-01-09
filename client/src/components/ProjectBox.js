import "./css/Window.css"
import "./css/ProjectBox.css"


const ProjectBox = ({name, key, date, description, url, techs, image}) => {


   return(

    <div   key={key}  >
            <div className="logoProject">
               <img src={image}/>
            </div>
            <div className="all-sides">
               {/* <h1>{name}</h1> */}
               <div className="left-side">
                  <p>{description}</p>
                  
               </div>
               <div className="line"></div>
               <div className="right-side">
                  <p>Duration: {date}</p>
                  <p>Techs: {techs}</p>
                  <button>Visit</button>
               </div>
               
               {/* <p>{url}</p> */}
            </div>
    </div>
   )
}

export default ProjectBox;