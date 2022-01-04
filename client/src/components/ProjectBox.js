import "./css/Window.css"

const ProjectBox = ({name, key, date, description, url, techs}) => {
   


   return(

    <div className="windowInformation"  key={key}>
                <p>{name}</p>
                <p>{date}</p>
                <p>{description}</p>
                <p>{techs}</p>
                <p>{url}</p>
    </div>



       
 
   )
}

export default ProjectBox;