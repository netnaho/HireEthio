import SingleApplied from "@/components/SingleApplied";
import { useEffect, useState } from "react";
import axios from "axios";

const JobsApplied = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [jobsApplied, setJobsApplied] = useState(null);
  const freelancerId = userInfo
    ? userInfo.isLoggedIn && userInfo.userInfo.userData.Freelancer_ID
    : null;
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:8800/check")
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (freelancerId) {
      axios
        .get(`http://localhost:8800/api/apply/get-applications/${freelancerId}`)
        .then((res) => {
          console.log(res.data);
          setJobsApplied(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [freelancerId]);

  return (
    <div className="flex flex-col min-h-[70vh]">
      {jobsApplied &&
        jobsApplied.map((job, index) => {
          return (
            <div key={index}>
              <SingleApplied
                jobTitle={job.Job_Title}
                clientName={job.Username}
                coverLetter={job.Cover_Letter}
                applicationId={job.Application_ID}
              />
            </div>
          );
        })}
    </div>
  );
};

export default JobsApplied;
