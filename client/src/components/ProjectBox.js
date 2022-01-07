import "./css/Window.css"


const ProjectBox = ({name, key, date, description, url, techs, image}) => {


   return(

    <div   key={key}>

        {/* <div style={{backgroundImage: `url(${image})` }} >
        </div> */}
            <img src={image}/>
               <h1>{name}</h1>
               <p>{date}</p>
               <p>{description}</p>
               <p>{techs}</p>
               <p>{url}</p>
                
    </div>
   )
}

export default ProjectBox;