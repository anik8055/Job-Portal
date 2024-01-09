import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <h1 className='nu'>Job Searcher</h1>
        
        <div className="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                {/* <div className="hori-selector"><div className="left"></div><div className="right"></div></div> */}
                <li className="nav-item">
                    <a className="nav-link" href="/Home"><i className="fas fa-tachometer-alt"></i>Home</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/Jobcreation"><i className="far fa-address-book"></i>Create a Job</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Jobs"><i className="far fa-clone"></i>Jobs Applications</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Applications"><i className="far fa-calendar-alt"></i>Applied</a>
                </li>
                
            </ul>
        </div>
     </nav>
     </div>
  )
}

export default Navbar
