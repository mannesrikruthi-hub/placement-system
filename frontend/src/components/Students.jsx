
import React from 'react';

export default function Students({ students }) {
  return (
    <div style={{padding:'30px',background:'#0f172a',minHeight:'100vh',color:'white'}}>
      <h1>Students</h1>

      <div style={{display:'flex',flexWrap:'wrap',gap:'20px'}}>
        {students.map((s,i)=>(
          <div key={i} style={{background:'#1e293b',padding:'20px',borderRadius:'12px',width:'250px'}}>
            <h3>{s.name}</h3>
            <p>Score: {s.total}</p>
            <p>Status: {s.status}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
