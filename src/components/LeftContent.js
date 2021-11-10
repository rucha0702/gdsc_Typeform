import React from 'react';
import './LeftContent.css';
// import {Link} from 'react-router-dom';

function refreshPage() {
    window.location.reload(false);
  }

function LeftContent() {
    return (
        <div className="left-content left-main" style={{display:"flex"}}>
            <div className="circles"></div>
            <div className="boy"></div>
           <div className="main-head">
              <div className="heading"><p className="uparVala">Welcome to</p><p className="formName">Typeform</p></div>
              <div>
                  <div>" Setting you up right now...</div>
              <button onClick={refreshPage} className="btn restart">Restart</button>
              {/* <a href="main#Name" onClick={refreshPage} className="btn restart">Restart</a> */}
              {/* <Link className="btn restart" to='/main'>Restart</Link> */}
              </div>
           </div> 
           
           
        </div>
    )
}

export default LeftContent
