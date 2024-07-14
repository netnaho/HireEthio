import Job from "@/components/ClientJob";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [allClientJobs, setAllClientJobs] = useState(null);
  const [userData, setUserData] = useState(null);

  const clientId = userData
    ? userData.isLoggedIn && userData.userInfo.userData.Client_ID
    : null;
  const clientName = userData
    ? userData.isLoggedIn && userData.userInfo.userData.Username
    : null;
  console.log(clientId);
  console.log(clientName);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:8800/check")
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/job/client-jobs/${clientId}`)
      .then((res) => {
        console.log(res.data);
        setAllClientJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [clientId]);
  return (
    <div>
      <div className="flex flex-col w-[80%] mx-auto">
        <div className="rounded-md mb-5 shadow-sm shadow-slate-700">
          {allClientJobs &&
            allClientJobs.map((job, index) => {
              return (
                <div key={index}>
                  <Job
                    jobTitle={job.Job_Title}
                    clientName={clientName}
                    postedAt={job.Created_at}
                    locatedAt={job.Location}
                    jobDescription={job.Job_Description}
                    jobCategory={job.Job_Category}
                    jobSite={job.Job_Site}
                    jobType={job.Job_Type}
                    salary={job.Salary}
                    experience={job.Experience_Level}
                    deadline={job.Application_Deadline}
                    jobId={job.Job_ID}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
