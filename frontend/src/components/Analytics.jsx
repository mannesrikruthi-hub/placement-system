
import React from 'react';

export default function Analytics(){
  return (
    <div style={{padding:'20px'}}>
      <h2>Placement Analytics</h2>
      <p>Graphs can be integrated (Chart.js recommended)</p>
      <div style={{display:'flex',gap:'20px'}}>
        <div style={{background:'#eee',padding:'20px'}}>Placed: 70%</div>
        <div style={{background:'#eee',padding:'20px'}}>Not Placed: 30%</div>
      </div>
    </div>
  )
}
