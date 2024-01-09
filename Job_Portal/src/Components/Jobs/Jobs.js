import React, { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore';
import { firestore } from '../../config/fire';
import styles from './Jobs.css'
import Jobapplication from '../Home/JobApplication/Jobapplication';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


const Jobs = () => {
    const [jobs, setjobs] = useState([])
    const colref = collection(firestore, 'Jobs')

    useEffect(() => {
        getDocs(colref)
            .then((e) => {
                let job = []
                e.docs.forEach((doc) => {
                    job.push({ ...doc.data(), id: doc.id })
                })
                setjobs(job)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    // const handleApplyNow = () => {
    //     let newWindow = window.open('', '_blank');
    //     newWindow.document.write(`
    //         <!DOCTYPE html>
    //         <html lang="en">
    //         <head>
    //             <meta charset="UTF-8">
    //             <title>Job Application</title>
    //             <link rel="stylesheet" href="Window.css">
    //         </head>
    //         <body>
    //             <div id="job-application-form"></div>
    //             <script>
    //                 ReactDOM.render(React.createElement(Jobapplication), document.getElementById('job-application-form'));
    //             </script>
    //         </body>
    //         </html>
    //     `);
    // };


    return (

        <div className="result">
            <Navbar/>
            {jobs.map((e) => {
                return (
                    <div className="cardcontainer" key={e.id}>
                        <div className="row2">
                            <strong className="muted">{e.name}</strong>
                            <p className="muted-text1 company-name">{e.title}</p>
                            <p className="muted-text2 company-location">{e.description}</p>
                        </div>
                        <div className="row3">
                            <div className="center"><strong>Salary {e.salary} Rs</strong></div>
                        </div>

                        <Link className='lin' to={`/Jobapplication/${e.id}`}>
                            <button className="jb" type="submit">Apply Now</button>
                        </Link>
                    </div>
                )
            })}

        </div>
    )
}

export default Jobs



