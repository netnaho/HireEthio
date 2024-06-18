import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Job = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="flex flex-col gap-y-4 border-b-[1px] border-slate-300 py-6 mb-4 px-5 font-mono hover:bg-slate-100 duration-75">
      {/* Job Title */}
      <div>
        <h1 className="font-bold text-2xl">Senior Angular Developer</h1>
      </div>
      {/* Job related Info-1 */}
      <div className="flex gap-x-8">
        <span className="text-sm text-slate-500 font-medium">
          Daftech Computer Engineering
        </span>
        <span className="text-sm text-slate-500 font-medium">
          Posted 5 hours ago
        </span>
        <span className="text-sm text-slate-500 font-medium">
          Addis Ababa, Ethiopia
        </span>
      </div>
      {/* Job Description */}
      <div className="font-mono font-medium">
        <h3>Job Description:</h3>
        <p className="">
          As a Senior angular Developer at Daftech Social ICT Solutions PLC, you
          will be responsible for creating responsive and engaging web and
          mobile applications that drive our mission of creating social impact
          through technology. You will collaborate closely with cross-functional
          teams to translate design mockups and wireframes into well-structured
          and performant frontend solutions.
        </p>
      </div>
      {/* Job related Info-2 */}
      <div className="flex gap-x-5">
        {/* Job category */}
        <div className=" bg-slate-200 px-2 py-1 rounded-full">
          software Design and development
        </div>
        {/* Job type and Job site */}
        <div className=" bg-slate-200 px-2 py-1 rounded-full">
          Onsite - Full Time
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
          <span className=" text-slate-500">Expenrence level</span>
          <span>Intermediate</span>
        </div>
        {/* Application Deadline */}
        <div className="flex flex-col">
          <span className=" text-slate-500">Application Deadline</span>
          <span>May 03, 2024</span>
        </div>
        {/* Apply button */}
        <Link to={location.pathname === "/jobs" ? "/application" : "/posts"}>
          <Button
            className={`${
              location.pathname === "/jobs" ? "bg-[#38A3A5]" : "bg-red-500"
            } px-4 w-[250px]`}
          >
            {location.pathname === "/jobs" ? "Apply" : "Delete Job"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Job;
