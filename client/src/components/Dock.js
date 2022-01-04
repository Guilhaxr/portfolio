import "./css/Docks.css"


const Dock = ({HandlerContact, HandlerAbout, HandlerProjects}) =>{

    return (
        <footer className="dock-container">
            <div className="dock">
                <ul>
                    <li>
                        <span>Finder</span>
                        <button  onClick= {HandlerAbout}><img src="../images/finderMe.png" alt="maps" /></button>
                    </li>
                    <li>    
                        <span>Finder</span>
                        <button onClick= {HandlerContact}><img src="../images/finderMe.png" alt="maps" /></button>
                    </li>
                    <li>
                        
                        <span>Finder</span>
                        <button onClick={HandlerProjects}><img src="../images/finderMe.png" alt="maps" /></button>
                        
                    </li>
                    <li>
                        <span>Finder</span>
                        <button onClick=" hello"><img src="../images/finderMe.png" alt="maps" /></button>
                    </li>
                </ul>
            </div>    
        </footer>
    )

}

export default Dock;