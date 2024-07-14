import { pool } from "../config/db.js";

export const handleViewHired = async (req, res) => {
  console.log("We are fetching your Applicants from database");
  const client_ID = req.params.id; // get the jobID from the request parameters
  console.log(client_ID);

  // Sql Query that retrives the application ID, hire_Date, Completed_Date, Rating first_Name and Last_Name of freelancer
  // also the job title and job description from the database for a specific user
  const sqlQuery = `
        SELECT 
            h.Application_ID,
            h.Hire_Date,
            h.Completed_Date,
            h.Rating,
            f.FirstName,
            f.LastName,
            f.Profile_Picture,
            j.Job_Title,
            j.Job_Description
        FROM 
            hires h
        JOIN 
            applications a ON h.Application_ID = a.Application_ID
        JOIN 
            freelancer f ON a.Freelancer_ID = f.Freelancer_ID
        JOIN 
            jobs j ON a.Job_ID = j.Job_ID
        WHERE 
            h.Client_ID = ?;
    `;

  try {
    // Get a connection from the pool

    // Insert the new job into the database
    const [result] = await pool.query(sqlQuery, [client_ID]);

    // Release the connection back to the pool

    res.json(result);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).send("Internal server error");
  }
};

export const handleHireApplicant = async (req, res) => {
  console.log("we are hiring your applicant");
  const { applicationId, clientId, freelancerId } = req.body;
  console.log(applicationId, clientId, freelancerId);
  try {
    // Get a connection from the pool
    // const connection = await pool.getConnection();

    // Insert the new job into the database
    console.log("nahom");
    const [result] = await pool.query(
      'UPDATE applications SET status = "accepted" WHERE Application_ID = ?',
      [applicationId]
    );
    const [queryDB] = await pool.query(
      "INSERT INTO hires (Application_ID, Client_ID, Freelancer_ID)  VALUES(?, ?, ?)",
      [applicationId, clientId, freelancerId]
    );
    // Release the connection back to the pool
    if (queryDB.affectedRows > 0) {
      res.json({ message: "1" });
      console.log("successfully hired");
    } else {
      res.json({ message: "2" });
    }
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).send("Internal server error");
  }
};

export const handleRejectApplication = async (req, res) => {
  console.log("we are rejecting your applicant");
  const { applicationId } = req.body;

  console.log(applicationId);

  try {
    // Insert the new job into the database
    const [result] = await pool.query(
      'UPDATE applications SET status = "rejected" WHERE Application_ID = ?',
      [applicationId]
    );

    if (result.affectedRows > 0) {
      res.json({ message: "1" });
      console.log("successfully hired");
    } else {
      res.json({ message: "2" });
    }
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).send("Internal server error");
  }
};
