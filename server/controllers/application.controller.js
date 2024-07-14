import { pool } from "../config/db.js";

export const applyToJob = async (req, res) => {
  const { jobId, freelancerId, jobCoverLetter } = req.body;
  try {
    const [rows] = await pool.query(
      `INSERT INTO applications (Job_ID, Freelancer_ID, Cover_Letter)
  VALUES (?, ?, ?);`,
      [jobId, freelancerId, jobCoverLetter]
    );
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

export const getApplications = async (req, res) => {
  const freelancerId = req.params.id;
  try {
    const [rows] = await pool.query(
      `SELECT 
    Applications.Application_ID,
    Applications.Job_ID,
    Applications.Freelancer_ID,
    Applications.Cover_Letter,
    Applications.status,
    Applications.Created_at,
    Jobs.Job_Title,
    Client.Username
FROM 
    Applications
JOIN 
    Jobs ON Applications.Job_ID = Jobs.Job_ID
JOIN 
    Client ON Jobs.Client_ID = Client.Client_ID
WHERE 
    Applications.Freelancer_ID = ?`,
      [freelancerId]
    );
    return res.json(rows);
  } catch (error) {
    console.log(error);
  }
};

export const deleteApplication = async (req, res) => {
  const applicationId = req.params.id;
  try {
    const [rows] = await pool.query(
      `DELETE FROM applications WHERE Application_ID = ?`,
      [applicationId]
    );
    return res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(400).json(err);
  }
};

export const getJobApplicants = async (req, res) => {
  const jobId = req.params.id;
  try {
    const [rows] = await pool.query(
      `SELECT 
    a.Application_ID,
    a.Job_ID,
    a.Freelancer_ID,
    a.Cover_Letter,
    a.status,
    a.Created_at,
    f.FirstName,
    f.LastName,
    f.Proffession,
    f.Profile_Picture,
    j.Job_Title
FROM 
    Applications a
JOIN 
    Freelancer f ON a.Freelancer_ID = f.Freelancer_ID
JOIN 
    Jobs j ON a.Job_ID = j.Job_ID
WHERE 
    a.Job_ID = ?`,
      [jobId]
    );
    return res.json(rows);
  } catch (error) {
    console.log(error);
  }
};
