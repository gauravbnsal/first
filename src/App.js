import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const blogObj= {
    title: 'Blog Title 1',
    description: 'Gaurav is the of this univerise bgytscghg ydu5yfydtrd uyfv6dvt ftfvtrdhgyu tuyg utgydcvg h'
  }
 
 
  return (
    <div className="App">
    <div className="BlogCard">
    <h3>{blogObj.title}</h3>
    <p>{blogObj.description}</p>
    </div>
    
    <div className="BlogCard">
    <h3>{blogObj.title}</h3>
    <p>{blogObj.description}</p>
    </div>
    
    <div className="BlogCard">
    <h3>{blogObj.title}</h3>
    <p>{blogObj.description}</p>
    </div>

    <div className="BlogCard">
    <h3>{blogObj.title}</h3>
    <p>{blogObj.description}</p>
    </div>


  </div>
     );
}

export default App;
