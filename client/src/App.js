import "./App.css"
import { useState } from "react"
import Header from "./components/Header"
import Dock from "./components/Dock"
import UserScreen from "./components/UserScreen"



function App() {
  const [openAbout, setOpenAbout] = useState(false)
  const [openContact, setOpenContact] = useState(false)
  const [openProjects, setOpenProjects] = useState(false)



    const HandlerAbout = () => {
      setOpenAbout(!openAbout)
      
  }

  const HandlerContact = () => {
    setOpenContact(!openContact)
  }

  const HandlerProjects = () => {
    setOpenProjects(!openProjects)
  }





  return (
    <div className="backGround">
      <Header />
      <UserScreen 
        HandlerContact={HandlerContact}
        HandlerAbout={HandlerAbout}
        HandlerProjects={HandlerProjects}
        
        openContact={openContact}
        openAbout={openAbout}
        openProjects={openProjects}
        
      />

      <Dock HandlerContact={HandlerContact} HandlerAbout={HandlerAbout} HandlerProjects={HandlerProjects}/>
      
    </div>
  );
}

export default App;
