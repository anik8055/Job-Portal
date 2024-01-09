import React, {useState} from 'react';
import './Jobcreation.css';
import {firebaseApp} from '../../config/fire'
import Navbar from '../Navbar/Navbar';

function JobCreation() {
    const db=firebaseApp.firestore();

    const [contact, setcontact] = useState({
        name :"",
        title : "",
        description: "",
        salary: ""
    })

    const handlechange =(event)=>{
        event.preventDefault();
        const {name, value} = event.target;
        setcontact((prev)=>{
            return {...prev, [name] : value}
        })
    }

    const adddoc =(event)=>{
        event.preventDefault();
        db.collection("Jobs")
        .add({
            name :contact.name,
            title : contact.title,
            description: contact.description,
            salary: contact.salary 
        }).then((docref)=>{
            const docid = docref.id;
            console.log(docid)
        })
    }

  return(

    <div className="fit">
        <Navbar/>
      <div className="row">
        <div className="col-md-12">
          <form  onSubmit={adddoc}>
            <h1 className='h1'>Job Creation</h1>

            {/* <fieldset> */}

              <legend> About Job</legend>
              <label htmlFor="company">Company Name:</label>
              <input type="text" id="company" name="name" value={contact.name} onChange={handlechange} />

              <label htmlFor="title">Job Title:</label>
              <input type="text" id="title" name="title" value={contact.title} onChange={handlechange}  />

              <label htmlFor="description">Description:</label>
              <input type="text" id="description" name="description" value={contact.description} onChange={handlechange} />

              <label htmlFor="salary">Salary:</label>
              <input type="number" id="salary" name="salary" value={contact.salary} onChange={handlechange} />
              {/* <label htmlFor="joblink">Job Link:</label>
              <input type="link" id="joblink" name="link" /> */}


            {/* </fieldset> */}
            

            <button className="jc" type="submit" >Create Job Posting</button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default JobCreation;
