import React from 'react';
import './About.css'

const About = () => {
  const skills = ['C++', 'Python', 'Machine Learning', 'AI', 'CSS', 'JavaScript', 'React'];

  return (
    <div>
      
      {/* Summary Section */}
      <section className='card'>
        <h2>Summary</h2>
        <div>
          <p>
            Hello! I'm Ishan Srivastava, a Computer Science and Engineering student at MNNIT Allahabad with a strong drive to build efficient software and solve complex algorithmic challenges. As an aspiring Software Development Engineer, my core technical foundation lies in C++ and Python, which I continuously sharpen through competitive programming on platforms like LeetCode, Codeforces, and CodeChef.
          </p>
          <p>
            Beyond algorithmic problem-solving, I am passionate about full-stack web development. I actively build with React, Node.js, and Tailwind CSS to bridge the gap between clean logic and real-world utility. Whether I am developing published tools like my Firefox extension, LinkIt, or exploring algorithmic trading concepts, I am always eager to learn, build, and optimize.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <div className="w">
        <section className='card'>
        <h2>Education</h2>
        
        <div>
          {/* College Info */}
          <div>
            <h3>Motilal Nehru National Institute of Technology (MNNIT)</h3>
            <p>B.Tech in Computer Science and Engineering (2nd Year)</p>
            
            <div>
              <div><span>1st Year CGPA:</span> 8.07</div>
              <div><span>Semester 1 SGPA:</span> 8.62</div>
              <div><span>Semester 2 SGPA:</span> 7.57</div>
            </div>
          </div>

          {/* Schooling Info */}
          <div>
            <h3>CMS, Lucknow</h3>
            
            <div>
              <div>
                <span>JEE Advanced Rank:</span>
                <span>13,456 (AIR)</span>
              </div>
              <div>
                <span>JEE Main Rank:</span>
                <span>6,562 (AIR)</span>
              </div>
              <div>
                <span>Class 12th:</span>
                <span>90%</span>
              </div>
              <div>
                <span>Class 10th:</span>
                <span>97%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='card'>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <section className='card'>
        <h2>Projects</h2>
        <ul>
            <li>AI Projects</li>
            <li>FireFox Extention</li>
            <li>Stock Predictor</li>
            <li>Ping Pong Game</li>
            <li>Portfolio</li>
        </ul>
      </section>
      </div>

    </div>
  );
};

export default About;