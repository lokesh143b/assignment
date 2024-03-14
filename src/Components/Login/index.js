import './index.css'
import 'bootstrap/dist/css/bootstrap.css'; 

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = (props) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(''); 
  const navigate = useNavigate();


  const onButtonClick = (e) => {
    e.preventDefault();  
      
    // Set initial error values to empty
    setEmailError('');
    setPasswordError('');

    // Check if the user has entered both fields correctly
    if ('' === email) {
      setEmailError('Please enter your email');
      return;
    }

    if ('' === password) {
      setPasswordError('Please enter a password');
      return;
    }

    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer');
      return;
    }

    if(email !== "" && password !== "" && password.length > 7){
      navigate("/jokes", { replace: true })
    }
    // Authentication calls will be made here...
  }
 
  return (
    <div className='bg-container d-flex flex-column justify-content-center align-items-center'>
        <div className='mainContainer pt-4 d-flex flex-column justify-content-center align-items-center'>
        <h1 className='title text-primary'>Log in</h1>
        <form className='form-container d-flex flex-column justify-content-center align-items-center' onSubmit={onButtonClick}>
          <div className='inputContainer'>
            <label className='label' htmlFor='email'>EMAIL</label>
            <input
            className="input form-control"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {
                if (email === '') {
                  setEmailError('Please enter your email');
                } 
              }}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className='inputContainer'>
          <label className='label' htmlFor='password'>PASSWORD</label>
            <input
              className="input form-control"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => {
                if (password === '') {
                  setPasswordError('Please enter a password');
                } else if (password.length < 7) {
                  setPasswordError('The password must be 8 characters or longer');
                }
              }}
              />
            {passwordError && <div className="error-message">{passwordError}</div>}
          </div>
          <div className='buttonContainer'>
            <button  className='inputButton btn btn-success'
              type="submit"
            >Log In
              </button>
          </div>
        </form>
        </div>
      </div>
      
    
  );
}

export default Login;