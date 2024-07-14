import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Applicant from "@/components/Applicant";

const Applicants = () => {
  // const [userInfo, setUserInfo] = useState(null);
  const [jobApplicants, setJobApplicants] = useState(null);
  const { id } = useParams();
  const jobId = id;
  axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8800/check")
  //     .then((res) => {
  //       setUserInfo(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/apply/get-job-applicants/${jobId}`)
      .then((res) => {
        console.log(res.data);
        setJobApplicants(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(jobApplicants);
  return (
    <div>
      {jobApplicants &&
        jobApplicants.map((applicant, index) => {
          return (
            <div key={index}>
              <Applicant
                freelancerId={applicant.Freelancer_ID}
                freelancerFirstName={applicant.FirstName}
                freelancerLastName={applicant.LastName}
                profession={applicant.Proffession}
                profilePic={applicant.Profile_Picture}
                coverLetter={applicant.Cover_Letter}
                jobTitle={applicant.Job_Title}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Applicants;
