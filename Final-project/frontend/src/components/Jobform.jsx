import React from 'react';
import { useState, useEffect } from 'react';
const emptyform = {
  title: "",
  company: "",
  location: "",
  salary: "",
  description: "",
};

const Jobform = ({ selectedJob, onSubmit, onCancel }) => {
  const [form, setForm] = useState(emptyform);
  const [logoFile, setLogoFile] = useState(null);


  useEffect(() => {
    if (selectedJob) {
      setForm({
        title: selectedJob.title || "",
        company: selectedJob.company || "",
        location: selectedJob.location || "",
        salary: selectedJob.salary || "",
        description: selectedJob.description || "",

      });
      setLogoFile(null);
    } else {
      setForm(emptyform);
      setLogoFile(null);
    }
  },[selectedJob]);
  //input change
  const hc = (e)=>{
    const {name,value} =e.target;
    setForm((prev)=>({...prev,[name]:value}));
  };
  //file chane
  const hf= (e)=> {
    const file= e.target.files?.[0];
  }
  //submit
  const hs =(e)=>{
    e.preventDefault();
    onSubmit(form,logoFile);
  }

  return <>
  <div>
  <h2 className='font-bold'>
   {selectedJob ? "Update Job" : "Add new Job"}
  </h2>
  {selectedJob ? (
    <button
     onClick={onCancel}
     className='text-sm rounded-xl border'
    >
      Cancel Edit
    </button>
  ): null}
 </div>
 <form onSubmit={hs}>
  <label>Job Title</label>
  <input 
  name='title'
  value={form.title}
  onChange={hc}
  placeholder='enter title'
  required
  />
<br></br>
<label>Company</label>
  <input 
  name='company'
  value={form.company}
  onChange={hc}
  placeholder='enter company'
  required
  />
<br></br>
<label>location</label>
  <input 
  name='location'
  value={form.location}
  onChange={hc}
  placeholder='enter location'
  required
  />
<br></br>
<label>Salary</label>
  <input 
  name='salary'
  value={form.salary}
  onChange={hc}
  placeholder='enter salary'
  required
  />
<br></br>
<label>Description</label>
  <input 
  name='description'
  value={form.description}
  onChange={hc}
  placeholder='enter description'
  required
  />
<br></br>
<label>Company Logo {selectedJob ? "update" :""}</label>
  <input 
  type='file'
  accept='image/*'
  onChange={hf}
  placeholder='enter title'
  />
  {logoFile ? (
    <p className='text-xs text-gray-500'>
      selected:<span>{logoFile.name}</span>
    </p>
  ):null}
<br></br>
<button type='submit'>
  {selectedJob ? "UPDATE JOB" :"ADD JOB"}
</button>
<button type='button' onClick={()=>{
  setForm(emptyform)
  setLogoFile(null);
  oncancel?.();
}}>
Reset
</button>

 </form>

  </>
}

export default Jobform