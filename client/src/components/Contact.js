import "./css/Window.css"
import { useState } from "react"
import "./css/contact.css"


const Contact = ({HandlerButton}) => {
    const [zoom, setZoom] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    console.log(name)
    console.log(email)
    console.log(message)

    const handleSubmit = (event) => {
        event.preventDefault();
      }
      

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

    const windowContactStyle = {
        display: "flex",
        justifyContent: "center",
     
    }

    return(
        
    <div  className="window-container" style={zoom ? maxZoom : null} >
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
        <div className="windowInformation" style={windowContactStyle}>
           <div className="contactMe">
               Contact Me
           </div>
         <div className="contactform">
             <form  onSubmit={handleSubmit} className="form">
                 <label for="name">Your Name</label>
                 <input type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="name"     
                        tabIndex="1"   
                        required
                />
        
                <label for="email">Email</label>
                <input 
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email"
                    tabIndex="2"
                    placeholder="Email"
                    required
                />
                <label for="message">Message</label>
                <textarea 
                    type="text"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="message"
                    tabIndex="3"
                    required
                />
                <button  type="submit" className="submitButton">Submit</button>
             </form>

         </div>

        </div>
    </div>
    )
}

export default Contact;