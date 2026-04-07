
import React, { useState } from 'react';

export default function Home({ students, setStudents }) {
  const [form,setForm]=useState({
    name:'',
    skills:'',
    internship:'',
    project:'',
    coding:0,
    aptitude:0,
    communication:0
  });
  const [resume,setResume]=useState(null);
  const [result,setResult]=useState("");
  const [suggestion,setSuggestion]=useState("");

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  }

  const analyze=()=>{
    const total = Number(form.coding)+Number(form.aptitude)+Number(form.communication);
    let status="Not Eligible";
    let suggest="";

    if(total>=200 && form.skills && form.internship){
      status="Eligible";
      suggest="You are ready for placements 🚀";
    } else {
      status="Not Eligible";
      suggest = `
Roadmap to Improve:
• Improve coding skills (DSA, LeetCode)
• Practice aptitude daily
• Work on communication skills
• Complete at least 1 internship
• Build 2-3 real-time projects
`;
    }

    setResult("Total Score: "+total+" → "+status);
    setSuggestion(suggest);

    setStudents([...students,{...form,status,total}]);
  }

  return (
    <div style={{padding:'30px',background:'#0f172a',minHeight:'100vh',color:'white'}}>
      <h1>Student Analysis</h1>

      <div style={{background:'#1e293b',padding:'20px',borderRadius:'12px',maxWidth:'400px'}}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name"/><br/>
        <input name="skills" value={form.skills} onChange={handleChange} placeholder="Skills"/><br/>
        <input name="internship" value={form.internship} onChange={handleChange} placeholder="Internship"/><br/>
        <input name="project" value={form.project} onChange={handleChange} placeholder="Project"/><br/>

        <h4>Scores</h4>
        <input name="coding" type="number" onChange={handleChange} placeholder="Coding Score"/><br/>
        <input name="aptitude" type="number" onChange={handleChange} placeholder="Aptitude Score"/><br/>
        <input name="communication" type="number" onChange={handleChange} placeholder="Communication"/><br/>

        <h4>Upload Resume</h4>
        <input type="file" onChange={(e)=>setResume(e.target.files[0])}/>
        {resume && <p style={{color:'lightgreen'}}>{resume.name}</p>}

        <button onClick={analyze} style={{marginTop:'10px',padding:'10px',background:'#22c55e',color:'white'}}>
          Analyze
        </button>

        {result && <p style={{marginTop:'10px'}}>{result}</p>}

        {suggestion && (
          <div style={{marginTop:'10px',background:'#020617',padding:'10px',borderRadius:'8px'}}>
            <pre style={{whiteSpace:'pre-wrap'}}>{suggestion}</pre>
          </div>
        )}
      </div>
    </div>
  )
}
