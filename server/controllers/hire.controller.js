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

export const handleHireApplicant = async (req, res) => {
    console.log("we are hiring your applicant");
    const application_ID = req.query.Application_ID
    const client_ID = req.query.Client_ID;

    console.log(application_ID);
    console.log(client_ID);
    try{
        // Get a connection from the pool
        const connection = await pool.getConnection();

        // Insert the new job into the database
        const [result] = await connection.execute(
            'UPDATE applications SET status = "accepted" WHERE Application_ID = ?', [application_ID]
        );
        const [queryDB] = await connection.execute(
            'INSERT INTO hires (Application_ID, Client_ID, Hire_Date)  VALUES(?, ?, CURDATE())', [application_ID, client_ID]
        );

        connection.release(); // Release the connection back to the pool
        if (queryDB.affectedRows > 0){
            res.json({message: '1'})
            console.log("successfully hired")
        } else {
            res.json({message: '2'})
        }
        
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).send('Internal server error');
    }
}

export const handleRejectApplication = async (req, res) => {
    console.log("we are hiring your applicant");
    const application_ID = req.query.Application_ID

    console.log(application_ID);
    try{
        // Get a connection from the pool
        const connection = await pool.getConnection();

        // Insert the new job into the database
        const [result] = await connection.execute(
            'UPDATE applications SET status = "rejected" WHERE Application_ID = ?', [application_ID]
        );

        connection.release(); // Release the connection back to the pool
        if (result.affectedRows > 0){
            res.json({message: '1'});
            console.log("successfully hired")
        } else {
            res.json({message: '2'})
        }
        
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).send('Internal server error');
    }
}
