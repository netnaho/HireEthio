import Job from "@/components/Job";
import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigate } from "react-router-dom";
import edit from "../assets/edit.svg"

const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [clientID, setClientID] = useState(1);
  const navigate = useNavigate();
  
  useEffect( () =>{
    const fetchJobs = async () => {
      try{
        const response = await axios.get(`http://localhost:8000/api/job/view`,{
          params: {
            clientID: clientID
          }
        });
        setJobs(response.data);
        setLoading(false);
      } catch (e){
        setError(e);
        setLoading(false);
      }
    }
  
    fetchJobs();
  
  }, [clientID]);

  // Delete a Job 
 const handleDelete = async (event) => {
    const jobID = event.target.value;
      try{
        const response = await axios.get(`http://localhost:8000/api/job/delete`,{
          params: {
            job_ID: jobID
          }
        });
        if(response.data.message == "1"){
            navigate(0);
        } else{
          alert("you should refresh might not really be Deleted");
        }
      } catch (e) {
          alert("it looks like something is wrong!");
          console.error(e.message)
      }
  }

  
  // View Applicants in a specific job
  const handleViewApplicants = async (event) => {
    const jobID = event.target.value;
      try{
        const response = await axios.post(`http://localhost:8000/api/application/viewSpecificJobApplicants`, {jobID});
        navigate("/applicants", { state: { applicants: response.data } });
      } catch (e) {
          alert("it looks like something is wrong! please try again");
          console.error(e.message)
      }
  }
  

  if (loading){
    return ( <div>Loading...</div> )
  }
  if(error){
    return ( <div> error: {error.message}</div> )
  }

  if (jobs.length === 0) {
    return <div>You haven't posted any job yet</div>;
  }

  return (
    <div>
      <div className="flex flex-col w-[80%] mx-auto">
        
      {jobs.map((job) => (
        <div key={job.job_ID} className="rounded-md mb-5 shadow-sm shadow-slate-700 hover:bg-slate-100 p-4">
          <div className="flex flex-col gap-y-4 border-b-[1px] border-slate-300 py-6 mb-4 px-5 font-mono  duration-75">
            <div className="flex">
              <h1 className="font-bold text-2xl mr-2">{job.Job_Category}</h1>
              <button className="border rounded-full p-2 "> 
                <img src={edit} alt="edit" className="w-5 h-5" />
              </button>
            </div>
      {/* Job related Info-1 */}
      <div className="flex gap-x-8">
        <span className="text-sm text-slate-500 font-medium">
          Daftech Computer Engineering
        </span>
        <span className="text-sm text-slate-500 font-medium">
          {job.Created_at}
        </span>
        <span className="text-sm text-slate-500 font-medium">
          Addis Ababa, Ethiopia
        </span>
      </div>
      {/* Job Description */}
      <div className="font-mono font-medium">
        <h3><strong> Job Description:</strong></h3>
        <p className="">
          {job.Job_Description}
        </p>
      </div>
      {/* Job related Info-2 */}
      <div className="flex gap-x-5">
        {/* Job category */}
        <div className=" bg-slate-200 px-2 py-1 rounded-full">
          {job.Job_Type}
        </div>
        {/* Job type and Job site */}
        <div className=" bg-slate-200 px-2 py-1 rounded-full">
          {job.Job_Site}
        </div>
      </div>
      {/* Job related Info-3 */}
      <div className="flex justify-between">
        {/* Job Payment type */}
        <div className="flex flex-col">
          <span className=" text-slate-500">Monthly</span>
          <span>$8,000</span>
        </div>
        {/* Experience level */}
        <div className="flex flex-col">
          <span className=" text-slate-500">Experience level</span>
          <span>{job.Experience_Level}</span>
        </div>
        {/* Application Deadline */}
        <div className="flex flex-col">
          <span className=" text-slate-500">Application Deadline</span>
          <span>{job.Application_Deadline}</span>
        </div>
        {/* Apply button */}
        {/* <Link to={location.pathname === "/jobs" ? "/application" : "/posts"}> */}
        <div className="flex-col">
        <button
            type="submit"
            value= {job.Job_ID}
            onClick = {handleViewApplicants}
            className="bg-[#38A3A5] px-4 py-2 rounded mb-2 text-white text-sm w-[250px]"
          >
            Applicants
          </button> <br />
          <Button
            type="submit"
            value= {job.Job_ID}
            onClick = {handleDelete}
            className={`${
              location.pathname === "/jobs" ? "bg-[#38A3A5]" : "bg-red-500"
            } px-4 w-[250px]`}
          >
            {location.pathname === "/jobs" ? "Apply" : "Delete Job"}
          </Button><br />
          
        </div>
        {/* </Link> */}
      </div>
    </div>
    </div>
    ))}
        
      </div>
    </div> 
  );  
};

export default Posts;
