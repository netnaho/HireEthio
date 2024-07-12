import Job from "@/components/Job";
import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import edit from "../assets/edit.svg"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [clientID, setClientID] = useState(1);
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [applicantsNeeded, setApplicantsNeeded] = useState({});
  const [jobDescription, setJobDescription] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [jobSite, setJobSite] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobSalary, setJobSalary] = useState("");

  
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

  // handles Application Needed selection
  const handleApplicantsNeeded = (event) => {
    const { value, checked } = event.target;
    setApplicantsNeeded((prevValues) => ({
        ...prevValues,
        [value]: checked,
    }));
  };

  // this handle the job type 
  const handleJobType = (event) => {
    setJobType(event.target.value);
  };

  // this handles the job site
  const handleJobSite = (event) => {
    setJobSite(event.target.value);
  };

  //this handles the experice level
  const handleExperienceLevel = (value) => {
    setExperienceLevel(value);
};

// this handles the job category
const handleJobCategory = (value) => {
  setJobCategory(value);
};

//this is the Date format changer
const formatDate = (datetimeString) => {
  const date = new Date(datetimeString);
  return date.toLocaleDateString(); // Adjust options as needed
};

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

  // Updates Specific job
  const handleUpdate = async (event) => {
    event.preventDefault();
    const jobID = event.target.value;
        const data = new FormData();
        data.append("Job_ID", jobID);
        data.append("Job_Title", jobTitle);
        data.append("Job_Type", jobType);
        data.append("Applicants_Needed", JSON.stringify(applicantsNeeded)) ;
        data.append("Job_Description", jobDescription); 
        data.append("Job_Category", jobCategory); 
        data.append("Job_Site", jobSite); 
        data.append("Application_Deadline", applicationDeadline) 
        data.append("Experience_Level", experienceLevel)
        data.append("Job_Location", jobLocation)
        data.append("Job_Salary", jobSalary)

        for (let [key, value] of data.entries()) {
            console.log(key, value);
        }

        try {
            const response = await axios.post('http://localhost:8000/api/job/update', data);

            if (response.data.message === '1') {
              navigate(0);
            } else {
                alert("Something went wrong! Please refresh and try again");
            }
        } catch (error) {
            alert('We could not Update your job into the system!');
            console.error(error);
        }
  }
  

  if (loading){
    return ( <div className="flex flex-col w-[70%] mx-auto shadow-sm shadow-slate-400 rounded-md p-4 m-4">Loading...</div> )
  }
  if(error){
    return ( <div className="flex flex-col w-[70%] mx-auto shadow-sm shadow-slate-400 rounded-md p-4 m-4"> error: {error.message}</div> )
  }

  if (jobs.length === 0) {
    return <div className="flex flex-col w-[70%] mx-auto shadow-sm shadow-slate-400 rounded-md p-4 m-4" >You haven't posted any job yet</div>;
  }

  return (
    <div>
      <div className="flex flex-col w-[80%] mx-auto">
        
      {jobs.map((job) => (
        <div key={job.job_ID} className="rounded-md mb-5 shadow-sm shadow-slate-700 hover:bg-slate-100 p-4">
          <div className="flex flex-col gap-y-4 border-b-[1px] border-slate-300 py-6 mb-4 px-5 font-mono  duration-75">
            <div className="flex">
              <h1 className="font-bold text-2xl mr-2">{job.Job_Title}</h1>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="border rounded-full p-2 "> 
                    <img src={edit} alt="edit" className="w-5 h-5" />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[80vw]">
                  <DialogHeader>
                    <DialogTitle>Edit Job</DialogTitle>
                    <DialogDescription>
                        Make changes to your Job here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="w-full grid gap-4 py-4">

                    {/* this is for the job title */}
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                          Job Title
                      </Label>
                      <Input
                        id="name"
                        defaultValue={job.Job_Title}
                        className="col-span-3"
                        onChange={(e) => setJobTitle(e.target.value)}
                      />
                    </div>

                    {/* this is for the job category */}
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                          Job Category
                      </Label>
                      <Select  onValueChange={handleJobCategory}>
                                <SelectTrigger >
                                    <SelectValue placeholder="Select the Job's category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categories</SelectLabel>
                                        <SelectItem value="Software-dev">Software Development</SelectItem>
                                        <SelectItem value="Accounting And finance">Accounting and Finance</SelectItem>
                                        <SelectItem value="Media and Communication">Media and Communication</SelectItem>
                                        <SelectItem value="Video Editing">Video Editing</SelectItem>
                                        <SelectItem value="Art and Design">Creative art and design</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                    </div>

                    {/* this is for the job description */}
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                          Job Description
                      </Label>
                      <Textarea
                        id="username"
                        defaultValue={job.Job_Description}
                        className="col-span-3"
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
                    </div>
                    
                    {/* this is for the applicants needed */}
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                          Applicants Needed
                      </Label>
                      <div className="flex gap-x-4 pl-4">
                        <div className="flex gap-x-2 items-center">
                          <input type="checkbox" id="male"
                            name="male"
                            value="male"
                            checked={applicantsNeeded.male || false}
                            onChange={handleApplicantsNeeded} />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex gap-x-2 items-center">
                          <input type="checkbox" id="female"
                            name="female"
                            value="female"
                            className="w-12"
                            checked={applicantsNeeded.female || false}
                            onChange={handleApplicantsNeeded} />
                          <Label htmlFor="female">Female</Label>
                        </div>
                      </div>
                    </div>

                    {/* this is for the job type */}
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                          Job Type
                      </Label>
                      <div className="flex gap-x-5 pl-4" >
                        <div className="flex items-center gap-x-2">
                          <input
                            type="radio"
                            value="Full Time" 
                            id="r1" 
                            name="type"
                            checked = {jobType === "Full Time"}
                            onChange={handleJobType} />
                          <Label htmlFor="r1">Full Time</Label>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <input
                            type="radio"
                            value="Part Time" 
                            id="r2" 
                            name="type"
                            checked = {jobType === "Part Time"}
                            onChange={handleJobType} />
                          <Label htmlFor="r2">Part Time</Label>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <input
                            type="radio"
                            value="Freelance" 
                            id="r3" 
                            name="type"
                            checked = {jobType === "Freelance"}
                            onChange={handleJobType}
                            className="" />
                            <Label htmlFor="r3">Freelance</Label>
                        </div>
                      </div>
                    </div>

                    {/* this is for the Job Site */}
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="" className="text-right">
                          Job Site
                      </Label>
                      <div
                      className="flex gap-x-5 pl-4">
                      <div className="flex items-center gap-x-2">
                        <input
                          type="radio"
                          value="On-Site" 
                          id="onsite" 
                          name="site"
                          checked = {jobSite === "On-Site"}
                          onChange={handleJobSite}
                          className="" />
                        <Label htmlFor="onsite">On-Site</Label>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <input
                          type="radio"
                          value="Remote" 
                          id="remote" 
                          name="site"
                          checked = {jobSite === "Remote"}
                          onChange={handleJobSite}
                          className="" />
                        <Label htmlFor="remote">Remote</Label>
                      </div>
                    </div>
                    </div>

                    

                    {/* this is for the Experience Level */}
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                          Experiance Level
                      </Label>
                    <Select value={experienceLevel} onValueChange={handleExperienceLevel}>
                                <SelectTrigger className="w-[100%]">
                                    <SelectValue placeholder="Select the Expertise type the job requires" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Experience Levels</SelectLabel>
                                        <SelectItem value="Expert">Expert</SelectItem>
                                        <SelectItem value="Senior">Senior</SelectItem>
                                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                                        <SelectItem value="Junior">Junior</SelectItem>
                                        <SelectItem value="Entry">Entry</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                    </Select>
                    </div>

                    {/* this is for location */}
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                          Job Location
                      </Label>
                      <Input
                        id="name"
                        defaultValue={job.Location}
                        onChange={(e) => setJobLocation(e.target.value)}
                        className="col-span-3"
                      />
                    </div>

                    {/* this is for the Salary */}
                    <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right" htmlFor="jobSalary">
                                Job Salary /per Month/
                            </Label>
                            <Input onChange={(e) => setJobSalary(e.target.value)} name="jobSalary" id="job-title" placeholder="Enter Salary per month" required />
                    </div>

                    {/* this is for the application deadline */}
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                          Job Location
                      </Label>
                      <Input 
                        type="date" 
                        onChange={(e) => setApplicationDeadline(e.target.value)}
                        id="date" 
                      />
                    </div>

                  </div>
                  <DialogFooter>
                      <Button value={job.Job_ID} onClick={handleUpdate} type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>



            </div>
      {/* Job related Info-1 */}
      <div className="flex gap-x-8">
        <span className="text-sm text-slate-500 font-medium">
          {job.Job_Category}
        </span>
        <span className="text-sm text-slate-500 font-medium">
          {formatDate(job.Created_at)}
        </span>
        <span className="text-sm text-slate-500 font-medium">
          {job.Location}
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
        {/* Gender */}
        <div className=" bg-slate-200 px-2 py-1 rounded-full">
          {job.Applicants_Needed}
        </div>
      </div>
      {/* Job related Info-3 */}
      <div className="flex justify-between">
        {/* Job Payment type */}
        <div className="flex flex-col">
          <span className=" text-slate-500">Monthly</span>
          <span>${job.Salary}</span>
        </div>
        {/* Experience level */}
        <div className="flex flex-col">
          <span className=" text-slate-500">Experience level</span>
          <span>{job.Experience_Level}</span>
        </div>
        {/* Application Deadline */}
        <div className="flex flex-col">
          <span className=" text-slate-500">Application Deadline</span>
          <span>{formatDate(job.Application_Deadline)}</span>
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
