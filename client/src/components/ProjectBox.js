import "./css/Window.css"


const ProjectBox = ({name, key, date, description, url, techs, image}) => {


   return(

    <div   key={key} style={{backgroundColor: "white"}}>
            <div>
               <img src={image}/>
            </div>
               <h1>{name}</h1>
               <p>{date}</p>
               <p>{description}</p>
               <p>{techs}</p>
               <p>{url}</p>
                
    </div>
   )
}

export default ProjectBox;