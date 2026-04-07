
import React, { useState } from 'react';

export default function ResumeUpload(){
  const [file,setFile]=useState(null);

  return (
    <div style={{padding:'30px',background:'#eef2f7',minHeight:'100vh'}}>
      <h2 style={{color:'#0b3d91'}}>Upload Resume</h2>

      <div style={{background:'white',padding:'20px',borderRadius:'10px'}}>
        <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
        {file && (
          <div style={{marginTop:'15px'}}>
            <p><b>File Name:</b> {file.name}</p>
            <p style={{color:'green'}}>Resume uploaded successfully ✅</p>
          </div>
        )}
      </div>
    </div>
  )
}
