import React, { useEffect, useState } from 'react';
import './Signin.css';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../config/fire';

function Signin() {
    const navigate = useNavigate();

    const [values, setvalues] = useState({
        name : "",
        email : "",
        pass : ""
    })

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
      
        if (signUpButton && signInButton && container) {
          signUpButton.addEventListener('click', () =>
            container.classList.add('right-panel-active')
          );
      
          signInButton.addEventListener('click', () =>
            container.classList.remove('right-panel-active')
          );
        }
      }, []);

    const handlesubmissions =async()=>{
        await signInWithEmailAndPassword(auth, values.email, values.pass)
        .then((res)=>{
            console.log(res)
            navigate("/Home")
        })
        .catch((error) => {
            console.error("Error signing in:", error);
          });
    }

    const handlesubmission =async()=>{
        await createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then((res)=>{
            const user = res.user
            updateProfile(user,{
                displayName : values.name
            })
            navigate("/Home")
        })
    }

    return (
        <div className="App">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                crossOrigin="anonymous"></link>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1 className='num'>Create Account</h1>
                        <input type="text" placeholder="Name" onChange={(event)=> setvalues((prev)=>({...prev, name:event.target.value}))}/>
                        <input type="email" placeholder="Email" onChange={(event)=> setvalues((prev)=>({...prev, email:event.target.value}))}/>
                        <input type="password" placeholder="Password" onChange={(event)=> setvalues((prev)=>({...prev, pass:event.target.value}))}/>
                        <button className='ab' onClick={handlesubmission}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form >
                        <h1 className='num'>Sign in</h1>
                        <input type="email" placeholder="Email" onChange={(event)=> setvalues((prev)=>({...prev, email:event.target.value}))} />
                        <input type="password" placeholder="Password" onChange={(event)=> setvalues((prev)=>({...prev, pass:event.target.value}))}/>
                        <a href="#">Forgot your password?</a>
                        <button onClick={handlesubmissions} >Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">

            </div>
        </div>
    )
}

export default Signin;
