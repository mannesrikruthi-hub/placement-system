
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(){
  return (
    <nav style={{padding:'15px',background:'#0b3d91',color:'white',display:'flex',justifyContent:'space-between'}}>
      <h3>Placement System</h3>
      <div>
        <Link to="/" style={{margin:'10px',color:'white'}}>Home</Link>
        <Link to="/dashboard" style={{margin:'10px',color:'white'}}>Dashboard</Link>
        <Link to="/students" style={{margin:'10px',color:'white'}}>Students</Link>
      </div>
    </nav>
  )
}
