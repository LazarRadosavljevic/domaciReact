import React from 'react'

function Skills() {

    const myskills = ['HTML','CSS','JS','PHP','C','Wordpress','Java'];
  return (
    <div className="condiv skills" id='skills'>
    <h1 className="subtopic">My Skills</h1>
  
    <ul>
        <div className='laptop'>
    {myskills.map((value)=>{
        return <li><b>{value}<br/></b></li>
       
    })}
      <button id='click' onClick={myskills.forEach((skill)=>{return skill})}>Click me</button>
     </div>
    </ul>
    </div>
  ) 
}

export default Skills
