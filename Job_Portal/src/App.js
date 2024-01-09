import React, {useState, useEffect} from "react"
import Signin from './Components/Signin/Signin';
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobCreation from './Components/Jobcreation/Jobcreation';
import Jobs from './Components/Jobs/Jobs';
import Jobapplication from './Components/Home/JobApplication/Jobapplication';
import Applications from './Components/Applications/Applications'

function App() {
    
    

    // const fetchjobs = async()=>{
    //     const req= await firestore.collection('jobs').get()
    //     const tempjob= req.docs.map((job)=>({...job.data(), id : job.id}))
    //     console.log(tempjob)
    //     setjobs(tempjob);
    // }

    // useEffect(() => {
    //   fetchjobs();
    // }, [])
    

    return (
        <div>
            <Router>
                <Routes>
                    <Route path ="/" element={<Signin/>} />
                    <Route path ="/Home" element={<Home/>} />
                    <Route path ="/Jobcreation" element={<JobCreation/>} />
                    <Route path ="/Jobs" element={<Jobs />} />
                    <Route path ="/Jobapplication/:id" element={<Jobapplication />} />
                    <Route path ="/Applications" element={<Applications />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
