import React from 'react';
import NameForm from './NameForm';
import LeftContent from './LeftContent';
import './MainPage.css';

function MainPage() {
    return (
        
        <div className="form-section">
        <div className="left-section">
          <LeftContent />
        </div>
        <div className="right-section">
      <NameForm />
      </div>
      </div>
        
    )
}

export default MainPage
