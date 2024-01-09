import React, { useState } from 'react';
import { firebaseApp } from '../../../config/fire';
import { useParams } from 'react-router-dom';
import '../../../App.css'
import Navbar from '../../Navbar/Navbar';

const Jobapplication = () => {

  const params = useParams();


  const db = firebaseApp.firestore();
  const [contact, setContact] = useState({
    name: '',
    email: '',
    // Add other necessary fields here
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addDoc = (event) => {
    event.preventDefault();
    db.collection('Candidates')
      .add({
        name: contact.name,
        email: contact.email,
        jobid: params.id
        // Include other fields here
      })
      .then((docref) => {
        const docid = docref.id;
        console.log(docid);
      });
  };

  return (
    <div >
      <Navbar/>
      <div className='gg'>
        <div>
      {/* <h2>Provide Your Information</h2> */}
      <form className="modal" onSubmit={addDoc}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={contact.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={contact.email}
          onChange={handleChange} // Fix missing closing parenthesis
        />
        {/* Other form fields */}
        <button type="submit">Submit</button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Jobapplication;
