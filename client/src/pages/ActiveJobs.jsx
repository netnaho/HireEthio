import { useState, useEffect } from "react";
import axios from "axios";
import ActiveJob from "@/components/ActiveJob";
import { useNavigate } from "react-router-dom";

const ActiveJobs = () => {
  const navigate = useNavigate;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);

  const clientId = userData
    ? userData.isLoggedIn && userData.userInfo.userData.Client_ID
    : null;
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
    const fetchJobs = async () => {
      try {
        setResponse(
          await axios.get(
            `http://localhost:8800/api/job/ActiveJobs/${clientId}`
          )
        );
        setLoading(false);
        console.log(response.data);
      } catch (e) {
        console.log(e);
        setError(e);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [clientId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }
  return (
    <div>
      {response && // <div>No Active Jobs found.</div>
        response.data.map((job, index) => {
          <div key={index}>
            <ActiveJob
              hireId={job.Hire_ID}
              jobTitle={job.Job_Title}
              jobDesc={job.Job_Description}
              jobCat={job.Job_Category}
              firstName={job.Freelancer_FirstName}
              lastName={job.Freelancer_LastName}
              profilePic={job.Profile_Picture}
              profession={job.Proffession}
              coverLetter={job.Cover_Letter}
            />
          </div>;
        })}
    </div>
  );
};

export default ActiveJobs;
