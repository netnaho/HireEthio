import { pool } from "../config/db.js"; // Importing the pool for database connection

export const handleJobPost = async (req, res) => {
  const {
    client_id,
    job_title,
    job_type,
    applicant_needed,
    job_desc,
    job_cat,
    job_site,
    deadline,
    experience,
    salary,
    location,
  } = req.body;
  try {
    const [rows] = await pool.query(
      `INSERT INTO jobs (Client_ID, Job_Title, Job_Type, Applicants_Needed, Job_Description, Job_Category, Job_site, Application_Deadline, Experience_Level, Salary, Location)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        client_id,
        job_title,
        job_type,
        applicant_needed,
        job_desc,
        job_cat,
        job_site,
        deadline,
        experience,
        salary,
        location,
      ]
    );
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const [rows] = await pool.query(`SELECT 
    Jobs.Job_ID,
    Jobs.Client_ID,
    Jobs.Job_Title,
    Jobs.Job_Type,
    Jobs.Applicants_Needed,
    Jobs.Job_Description,
    Jobs.Job_Category,
    Jobs.Job_Site,
    Jobs.Application_Deadline,
    Jobs.Experience_Level,
    Jobs.Created_at,
    Jobs.Salary,
    Jobs.Location,
    Client.Username
FROM 
    Jobs
JOIN 
    Client ON Jobs.Client_ID = Client.Client_ID;`);
    console.log(rows);
    return res.json(rows);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export const getClientJobs = async (req, res) => {
  const clientId = req.params.id;
  try {
    const [rows] = await pool.query(`SELECT * FROM jobs WHERE Client_ID = ?`, [
      clientId,
    ]);
    console.log(rows);
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export const deleteJob = async (req, res) => {
  const jobId = req.params.id;
  try {
    const [rows] = await pool.query(`DELETE FROM jobs WHERE Job_ID = ?`, [
      jobId,
    ]);
    console.log(rows);
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(400).json(rows);
  }
};
