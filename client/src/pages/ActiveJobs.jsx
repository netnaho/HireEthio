import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Navigate, useNavigate } from "react-router-dom";


const ActiveJobs = () => {
    const [clientID, setClientID] = useState("1");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect( () =>{
        const fetchJobs = async () => {
          try{
            const response = await axios.get(`http://localhost:8000/api/job/ActiveJobs`,{
              params: {
                clientID: clientID
              }
            });
            setJobs(response.data);
            setLoading(false);
            
          } catch (e){
            console.log(e)
            setError(e);
            setLoading(false);
          }
        }
      
        fetchJobs();
      
      }, []);

      const handleJobComplete = async (event) =>{
        event.preventDefault();
        const Hire_ID = event.target.value;
        try{
            const response = await axios.get('http://localhost:8000/api/job/CompleteJob', {
                params: {
                    Hire_ID: Hire_ID
                }
            })
            if (response.data.message == '1'){
                alert("Completed!!!")
                navigate(0);
            }
        } catch (error){
            console.error(error.message);
            alert("Something wrong please refresh and try again");
        }

      }

    if (loading) {
        return <div>Loading...</div>;
      }

    if (error){
        return <div>Error</div>
    }
 
      

    return (
        <div>
        <div className="flex flex-col w-[70%] mx-auto shadow-sm shadow-slate-400 rounded-md p-4 m-4">
          {jobs.length === 0 ? (
            <div>No Active job found</div>
          ) : (
            jobs.map((job) => (
              <div key={job.Freelancer_ID} className="mb-4 p-4 border rounded-md shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-x-5">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>
                        {job.Freelancer_FirstName.charAt(0)}
                        {job.Freelancer_LastName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <h2>
                      {job.Freelancer_FirstName} {job.Freelancer_LastName}
                    </h2>
                  </div>
                  <div className="text-slate-400">{job.Job_Category}</div> {/* Replace with actual rating if available */}
                </div>
                <div>
                  <p className="font-bold text-xl text-slate-400">
                    {job.Job_Title}
                  </p>
                </div>
                <div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Application cover letter</AccordionTrigger>
                      <AccordionContent>{job.Job_Description}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="flex justify-between items-center mt-4">
                <div className="flex gap-x-5">
                
                  </div>
                <Button 
                    onClick={handleJobComplete}
                    value={job.Hire_ID}
                    className="bg-blue-500">Complete</Button>
                    
                </div>
              </div>
             ))
          )} 
        </div>
      </div>
    )
}

export default ActiveJobs