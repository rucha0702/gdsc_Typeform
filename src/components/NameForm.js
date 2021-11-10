import React, {useState} from 'react';
// import { Questions } from './Questions';
import './NameForm.css';
// import { Link } from 'react-router-dom';

const NameForm = ()=> {
    
        
      const[UserRegister, setUserRegister]= useState({
        username : '',
        email: '',
        about:'',
        branch:'',
        domain: ''
      })
      
      
      
      const handleChange=(e)=> {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value
        
        setUserRegister({...UserRegister,
          [name] : value
        })

      }
      
    
      const handleSubmit= async (e)=>{
        // alert('A name was submitted: ' + this.state.value);
        e.preventDefault();
        console.log(UserRegister);
        const { username , email, about, branch, domain } = UserRegister;
        if( username && email && about && branch && domain )
      { const res = await fetch("https://gdsc-typeform-bd708-default-rtdb.firebaseio.com/userData.json",{
          method: "POST",
          headers:{
            "Content-Type" :"application/json",
          },
          body: JSON.stringify({
            username , email, about, branch, domain
          }),
        });
        if(res)
        {
          alert('Form Submitted');
          setUserRegister({
            username : '',
            email: '',
            about:'',
            branch:'',
            domain: ''
          })
        }
        else{
          alert("Please fill all the details");
        }
      }
      else{
        alert("Please fill all the details");
      }
      }
      
      const nameInputRef = React.useRef(null);
      
      React.useEffect(()=>{
        nameInputRef.current.focus();
      }, []);
      
      
      return (
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
          {/* {
            Questions.map((ques)=>{
              return(
                <div className="field" id={ques.question}>
                <span>{ques.id}</span>
                <label>{ques.question}</label>
                <input type={ques.type} name = {ques.name} value={ques.value} onChange={handleChange} />
                <a href={ques.urlP}>Prev</a>
                <a href={ques.urlN}>Next</a>
                </div>
              )
            })
          } */}
            <div className="field" id="Name">
                <span className="index">Q1.</span>
                <label className="question">What is your name?</label>
                <input type="text" placeholder="Type your answer here..." name="username"  ref={nameInputRef} value={UserRegister.username} onChange={handleChange} />
                <a className="next btn" href="#Email">Next</a>
           </div>

           <div className="field" id="Email">
                <span className="index">Q2.</span>
                <label className="question">Provide your Email: </label>
                <input type="email" placeholder="Type your answer here..." name="email"  value={UserRegister.email} onChange={handleChange} />
                <a className="prev btn" href="#Name">Prev</a>
                <a className="next btn" href="#Domain">Next</a>
           </div>
           <div className="field" id="Domain">
                <span className="index">Q3.</span>
                <label className="question">Which of the following domains do you like? </label>
                <div className="choice">
                  <button onClick={handleChange} name="domain" value="Programming" className='option'>Programming</button>
                  <button onClick={handleChange} name="domain" value="Design" className='option'>Design</button>
                  <button onClick={handleChange} name="domain" value="Development" className='option'>Development</button>
                </div>   
                {/* <input type="text" name="gender" value={UserRegister.about} onChange={handleChange} /> */}
                <a className="prev btn" href="#Email">Prev</a>
                <a className="next btn" href="#About">Next</a>
           {/* <button type="submit">Submit</button> */}
           </div>

           <div className="field" id="About">
                <span className="index">Q4.</span>
                <label className="question">Write something about yourself: </label>   
                <input type="text" placeholder="Type your answer here..." name="about" value={UserRegister.about} onChange={handleChange} />
                <a className="prev btn" href="#Domain">Prev</a>
                <a className="next btn" href="#mcq1">Next</a>
           </div>
           <div className="field" id="mcq1">
                <span className="index">Q5.</span>
                <label className="question">Which branch are you from? </label>
                <select className="select" name="branch" value={UserRegister.gender} onChange={handleChange}>
                  <option>Select</option>
                  <option>CS</option>
                  <option>IT</option>
                  <option>ECE</option>
                </select>   
                {/* <input type="text" name="gender" value={UserRegister.about} onChange={handleChange} /> */}
                <a className="prev btn" href="#About">Prev</a>
                {/* <a className="next btn" href="#">Next</a> */}
            <button className=" btn btn-submit" type="submit">Submit</button>
           </div>
           
          </form>
          </div>
        );
      
}

export default NameForm
