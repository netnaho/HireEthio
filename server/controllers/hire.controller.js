import { pool } from '../config/db.js';

export const handleViewHired = async (req, res) => {
    console.log("We are fetching your Applicants from database")
    const client_ID = req.query.clientID; // get the jobID from the request parameters
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
        const connection = await pool.getConnection();

        // Insert the new job into the database
        const [result] = await connection.execute(
            sqlQuery, [client_ID]
        );

        connection.release(); // Release the connection back to the pool
        
        res.json(result);
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).send('Internal server error');
    }
}
