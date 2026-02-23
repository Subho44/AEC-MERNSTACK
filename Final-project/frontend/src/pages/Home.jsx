import React from 'react'
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import api from '../api/api';
import Jobform from '../components/Jobform';
import Jobcard from '../components/Jobcard';

const Home = () => {
  const [jobs,setJobs] = useState([]);
  const [loading,setLoading] = useState(false);

  //for edit
  const [selectedJob,setSelectedJob] = useState(null);
  //msg
  const [msg,setMsg] = useState("");

  //fetch jobs

  const fetchJobs = async ()=> {
    try {
      setLoading(true);
      const res = await api.get("/api/jobs");
      setJobs(res.data);
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(()=>{
    fetchJobs();
  },[]);

  //add job

  const hs = async(form,logoFile)=> {
    try {
      setMsg("");
      const fd = new FormData();
      fd.append("title",form.title);
      fd.append("company",form.company);
      fd.append("location",form.location);
      fd.append("salary",form.salary);
      fd.append("description",form.description);

      if(logoFile) fd.append("logo",logoFile);

      if(selectedJob) {
        await api.put(`/api/jobs/${selectedJob._id}`,fd,{
          headers:{"Content-Type":"multipart/form-data"},
        });
        setMsg("job updated successfully");
        setSelectedJob(null);
      } else {
        await api.post("/api/jobs",fd,{
          headers:{"Content-Type":"multipart/form-data"},
        });
         setMsg("job added successfully");
      }
      fetchJobs();

    } catch(err) {
      console.error(err);
    }

  };

  //delete job
 const hd = async(id)=>{
  const ok =confirm("are you suredelete data?...");
  if(!ok) return;

  try {
    setMsg("");
    await api.delete(`/api/jobs/${id}`);
    setMsg("job deleted successfully");
    fetchJobs();
  } catch(err) {
      console.error(err);
    }
 }


 //edit job
 const he = (job)=> {
  setSelectedJob(job);
 };
 const canceledit = ()=> setSelectedJob(null);

  return <>
  <div className='min-h-screen  bg-gray-100'>
    <Navbar/>
    <Jobform 
    selectedJob={selectedJob}
    onSubmit={hs}
    onCancel={canceledit}
    />
    {
      msg ? (
        <p>{msg}</p>
      ): null
    }
  </div>
  <div>
    {
      loading ? (
        <div>Loading jobs</div>
      ): jobs.length === 0? (
        <p>no job found</p>
      ): (
        <div>
          {jobs.map((job)=>(
            <Jobcard 
            key={job._id}
            job={job}
            onEdit={he}
            onDelete={hd}
           />
          ))}
        </div>  
      )
    }
  </div>
  
  </>
}

export default Home