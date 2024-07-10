import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Applicants = () => {
  const location = useLocation();
  const { applicants } = location.state || { applicants: [] };

  return (
    <div>
      <div className="flex flex-col w-[70%] mx-auto shadow-sm shadow-slate-400 rounded-md p-4 m-4">
        {applicants.length === 0 ? (
          <div>No applicants found</div>
        ) : (
          applicants.map((applicant) => (
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
                  <h2>
                    {applicant.FirstName} {applicant.LastName}
                  </h2>
                </div>
                <div>Rating: 5.0</div> {/* Replace with actual rating if available */}
              </div>
              <div>
                <p className="font-bold text-xl text-slate-400">
                  {applicant.Profession}
                </p>
              </div>
              <div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Application cover letter</AccordionTrigger>
                    <AccordionContent>{applicant.Cover_Letter}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-x-5">
                  <Button className="bg-green-600">Hire</Button>
                  <Button className="bg-blue-500">Message</Button>
                </div>
                <Button className="bg-red-500">Reject</Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Applicants;
