import React from 'react';
import './SubmitPage.css';
import {Link} from 'react-router-dom';

function SubmitPage() {
    return (
        <div>
            <div className="circle-3"></div>
            <div className="submit-content">
                <div>100% completed</div>
                <div className="status-bar"></div>
                <div className="submit-text">Thankyou for using <span>Typeform</span></div>
                <Link to="/" className="btn btn-last">Home</Link>
            </div>
        </div>
    )
}

export default SubmitPage
