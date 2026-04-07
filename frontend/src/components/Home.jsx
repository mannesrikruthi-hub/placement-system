
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
  const analyze = () => {
    alert("Button clicked");
  };
  const coding = Number(form.coding);
  const aptitude = Number(form.aptitude);
  const communication = Number(form.communication);

  const total = coding + aptitude + communication;

  let resultText = "";
  let suggestionText = "";

  if (total >= 200) {
    resultText = "Eligible ✅";
    suggestionText = "Great! You are ready for placements 🚀";
  } else {
    resultText = "Not Eligible ❌";
    suggestionText = "Improve coding, aptitude and communication skills.";
  }

  setResult("Total: " + total + " → " + resultText);
  setSuggestion(suggestionText);
};


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

        <div onClick={() => alert("Working")} style={{background:"green",padding:"10px",cursor:"pointer"}}>
  Click Me
</div>

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
