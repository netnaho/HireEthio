import { pool } from '../config/db.js';

export const handleViewApplicantsForSpecificJob = async (req, res) => {
    console.log("We are fetching your Applicants from database")
    const {jobID} = req.body; // get the jobID from the request parameters
    console.log(jobID);

    try {
        // Get a connection from the pool
        const connection = await pool.getConnection();

        // Insert the new job into the database
        const [result] = await connection.execute(
            'SELECT f.FirstName, f.LastName, f.Proffession, a.Cover_Letter FROM applications a JOIN freelancer f ON a.Freelancer_ID = f.Freelancer_ID WHERE a.Job_ID = ?',
            [jobID]
        );

        connection.release(); // Release the connection back to the pool
        
        res.json(result);
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).send('Internal server error');
    }
}
