import "./css/Window.css"
import "./css/ProjectBox.css"


const ProjectBox = ({ techsLogos, key, date, description, url, techs, image}) => {

   console.log(techsLogos)

   return(

      

    <div   key={key}  >
            <div className="logoProject">
               <img src={image}/>
            </div>
            <div className="all-sides">
               <div className="left-side">
                  <p>{description}</p>
               </div>
               <div className="line"></div>
               <div className="right-side">
                  <p>Duration: {date}</p>
                  <p>Techs: {techs}</p>
                  <div className="techsLogo">
                   {techsLogos.map((item)=> <img src={item} />)}
                  </div>
                  
                  <button>Visit</button>
               </div>
               
               {/* <p>{url}</p> */}
            </div>
    </div>
   )
}

export default ProjectBox;