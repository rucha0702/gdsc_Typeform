import React from 'react';
import {Link} from 'react-router-dom';
// import MainPage from './MainPage';
import './HomePage.css';


function HomePage() {
    return (
        <div className="homepage-container">
            <div className="circle-2"></div>
            <div className="boy-2"></div>
            {/* <Link to='/main'>MainPage</Link> */}
            <div className="left-content left-content-home" style={{display:"flex"}}>
           <div className="main-head">
              <div className="heading"><p className="uparVala">Welcome to</p><p className="formName">Typeform ...</p></div>
              <div>
                  <div>" Let's get you set up...</div>
              {/* <a href="#Name" className="btn restart"></a> */}
              <Link className="btn btn-home" to='/main'>Click here</Link>
              </div>
           </div> 
           
           
        </div>
        </div>
    )
}

export default HomePage
