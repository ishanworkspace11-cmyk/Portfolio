import React from 'react';
import myPhoto from './pic.png';
import './Home.css';

const Home = () => {
  return (
    <div className='box'>
        <img className="photo" src={myPhoto} alt="Ishan Srivastava" />
        
        {/* We wrap the text in a new div to manage the spacing */}
        <div className='info-container'>
            <h2 className='subtitle'>Ishan Srivastava</h2>
            <h2 className='subtitle'>2nd Year CSE Student | NIT Allahabad</h2>
            
            <p className='intro'>
                Driven second-year CSE student at MNNIT passionate about software development. I am actively sharpening my C++ and Python skills through consistent practice with Data Structures and Algorithms (DSA). My goal is a career as an SDE, and I'm open to connecting with industry professionals.
            </p>
        </div>
    </div>
  )
}

export default Home;