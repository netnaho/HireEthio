import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Hires = () => {

  const [clientID, setClientID] = useState(1);
  const [hires, setHires] = useState([]);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect( () =>{
    const fetchJobs = async () => {
      try{
        const response = await axios.get(`http://localhost:8000/api/hire/viewHired`,{
          params: {
            clientID: clientID
          }
        });
        setHires(response.data);
        setLoading(false);
      } catch (e){
        console.log(e);
        setError(e);
        setLoading(false);
      }
    }
  
    fetchJobs();
  
  }, [clientID]);

  const formatDate = (datetimeString) => {
    const date = new Date(datetimeString);
    return date.toLocaleDateString(); // Adjust options as needed
  };

  if(error){
    return ( <div> error: {error.message}</div> )
  }

  if(loading){
    return(
      <div className="flex flex-col w-[70%] mx-auto shadow-sm shadow-slate-400 rounded-md p-4 m-4">Loading Please Wait a moment</div>
    )
  }

  return (
    <div>
      <div className="flex flex-col w-[70%] mx-auto shadow-sm shadow-slate-400 rounded-md p-4 m-4">
        {hires.length === 0 ? (
          <div>No Hires For any Job</div>
        ) : (
          hires.map((applicant) => (
            <div key={applicant.Freelancer_ID} className="mb-4 p-4 border rounded-md shadow-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-5">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>
                      {applicant.FirstName.charAt(0)}
                      {applicant.LastName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <h2><span className=" text-sm text-slate-400">Done By:</span> {applicant.FirstName} {applicant.LastName}
                  </h2>
                </div>
                <div><strong>Rating {applicant.Rating} </strong></div> {/* Replace with actual rating if available */}
              </div>
              <div>
                <p className="font-bold text-xl text-slate-400">
                  {applicant.Job_Title}
                </p>
              </div>
              <div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Job Description</AccordionTrigger>
                    <AccordionContent>{applicant.Job_Description}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="gap-x-5">
                  <div className="font-bold text-sm text-slate-400">Started {formatDate(applicant.Hire_Date)}</div>
                  <div className="font-bold text-sm text-slate-400">Completed {formatDate(applicant.Completed_Date)}</div>
                </div>
                {/* other */}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Hires