import { useState } from "react"
import { useDrag } from "react-use-gesture"
import {useSpring, animated} from "react-spring"
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import  "./css/UserScreen.css"

const UserScreen = ({HandlerAbout, HandlerContact, HandlerProjects, openAbout, openContact, openProjects  }) => {
   
  const [ counterAbout, setCounterAbout] = useState(0);
  const [ counterContact, setCounterContact] = useState(0);
  const [ counterProjects, setCounterProjects] = useState(0);
  

  const [aboutPos, setAboutPos] = useState({x: 0, y: 0});
  const [contactPos, setContactPos] = useState({x: 0, y: 0});
  const [projectPos, setProjectPos] = useState({x: 0, y: 0});
  

  const bindAboutPos = useDrag(({ offset: [ox, oy] }) => setAboutPos({ x: ox, y: oy}), {
      bounds: {top: 16 ,  left:-Infinity, right:Infinity
      } })

  const bindContactPos = useDrag(({  offset: [ox, oy]}) => setContactPos({ x: ox, y: oy }), {
      bounds: {top: 16 ,  left:-100, right:Infinity
      } })

  const bindProjectPos = useDrag(({  offset: [ox, oy]}) => setProjectPos({ x: ox, y: oy }), {
      bounds: {top: 16 ,  left:-100, right:Infinity
      } })

      let incrementAbout = () => {
        setCounterAbout((counterAbout + counterContact + counterProjects)  + 2 )
      }

      let incrementContact = () => {
        setCounterContact((counterAbout + counterContact + counterProjects)  + 2 )
      }

      let incrementProject = () => {
        setCounterProjects((counterAbout + counterContact + counterProjects)  + 2 )
      }

    return(
        <section className="ScreenLimit">

            <div  onClick={incrementAbout}  {...bindAboutPos()}  style={{
              width: "fit-content",
              position:"absolute",
              top: aboutPos.y,
              left: aboutPos.x,
              zIndex: counterAbout 
            }}>
              { openAbout && <About HandlerButton={HandlerAbout}  />  }
            </div>


            <div onClick={incrementContact}  {...bindContactPos()} style={{
              width: "fit-content",
              position:"absolute",
              top: contactPos.y,
              left: contactPos.x,
              zIndex: counterContact
            }}
            >
              {openContact && <Contact HandlerButton={HandlerContact}  />}
            </div>


              <div onClick={incrementProject}  {...bindProjectPos()} style={{
              width: "fit-content",
              position:"absolute",
              top: projectPos.y,
              left: projectPos.x,
              zIndex: counterProjects
            }}
            >
              {openProjects && <Projects HandlerButton={HandlerProjects}  />}  
            </div>
        </section>
    )
}

export default UserScreen;

