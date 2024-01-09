import React, { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore';
import { firestore } from '../../config/fire';
import './Application.css'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


const Jobs = () => {
    const [jobs, setjobs] = useState([])
    const colref = collection(firestore, 'Candidates')
    const [additionalData, setAdditionalData] = useState([])
    const additionalColRef = collection(firestore, 'Jobs');


    useEffect(() => {
        getDocs(colref)
            .then((e) => {
                let job = []
                e.docs.forEach((doc) => {
                    job.push({ ...doc.data(), id: doc.id })
                })
                setjobs(job)

                // const jobIds = job.map((job) => job.Jobid);

                // // Fetch additional data based on jobIds
                // const additionalColRef = collection(firestore, 'Jobs');
                // const query = additionalColRef.where('id', 'in', jobIds);
                // getDocs(query)
                //     .then((additionalSnapshot) => {
                //         const additionalDataArray = [];
                //         additionalSnapshot.docs.forEach((doc) => {
                //             additionalDataArray.push({ ...doc.data(), id: doc.id });
                //         });
                //         setAdditionalData(additionalDataArray);
                //     })
                //     .catch((error) => {
                //         console.error('Error fetching additional data:', error);
                //     });
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect (()=> {
        getDocs(additionalColRef)
                    .then((additionalSnapshot) => {
            const additionalDataArray = [];
            additionalSnapshot.docs.forEach((doc) => {
                additionalDataArray.push({ ...doc.data(), id: doc.id });
            });
            setAdditionalData(additionalDataArray);
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
            {jobs.map((job) => {
                // Find the corresponding additional data based on jobId
                const matchingAdditionalData = additionalData.find((data) => data.id === job.jobid);
                console.log(matchingAdditionalData)

                return (
                    <div className="cardcontainers" key={job.id}>
                        <div className="row2">
                        <p className="muted">{matchingAdditionalData ? matchingAdditionalData.name : ''}</p>
                            <h3>NAME - {job.name}</h3>
                            <p className="muted-text1 company-name">EMAIL - {job.email}</p>
                            {/* Display additional data */}
                            
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Jobs



