import Job from "@/components/Job";
import React from "react";

const Posts = () => {
  return (
    <div>
      <div className="flex flex-col w-[80%] mx-auto">
        <div className="rounded-md mb-5 shadow-sm shadow-slate-700">
          <Job />
        </div>
        <div className="rounded-md mb-5 shadow-sm shadow-slate-700">
          <Job />
        </div>
        <div className="rounded-md mb-5 shadow-sm shadow-slate-700">
          <Job />
        </div>
        <div className="rounded-md mb-5 shadow-sm shadow-slate-700">
          <Job />
        </div>
        <div className="rounded-md mb-5 shadow-sm shadow-slate-700">
          <Job />
        </div>
      </div>
    </div>
  );
};

export default Posts;
