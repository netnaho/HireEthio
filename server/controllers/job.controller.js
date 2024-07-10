import { pool } from '../config/db.js'; // Importing the pool for database connection

export const handleJobPost = async (req, res) => {
    console.log("we are Posting your job")
    const { Client_ID, Job_Title, Job_Type, Applicant_Needed, Job_Description, Job_Category, Job_Site, Application_Deadline, Exprience_Level  } = req.body;

    try {
        // Get a connection from the pool
        const connection = await pool.getConnection();

        // Insert the new job into the database
        const [result] = await connection.execute(
            'INSERT INTO jobs (Client_ID, Job_Title, Job_Type, Applicants_Needed, Job_Description, Job_Category, Job_Site, Application_Deadline, Experience_Level) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [Client_ID, Job_Title, Job_Type, Applicant_Needed, Job_Description, Job_Category, Job_Site, Application_Deadline, Exprience_Level]
        );

        connection.release(); // Release the connection back to the pool

        res.status(201).send('Job Posted successfully!');
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).send('Internal server error');
    }
};


// view job posted by a client using client ID
export const viewJobPost = async (req, res) => {  
    console.log("We are fetching your posted job")
    const clientID = req.query.clientID; // get the clientID from the request parameters
    console.log(clientID);

    try {
        // Get a connection from the pool
        const connection = await pool.getConnection();

        // Insert the new job into the database
        const [result] = await connection.execute(
            'SELECT * FROM jobs WHERE Client_ID = ?',
            [clientID]
        );

        connection.release(); // Release the connection back to the pool
        
        res.json(result);
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).send('Internal server error');
    }
};


// Delete specific job posted by a client using client ID
export const deleteJob = async (req, res) => {  
    console.log("We are Deleting your posted job")
    const jobID = req.query.job_ID; // get the jobID from the request parameters
    console.log(jobID);

    try {
        // Get a connection from the pool
        const connection = await pool.getConnection();

        // Insert the new job into the database
        const [result] = await connection.execute(
            'DELETE FROM jobs WHERE Job_ID = ?',
            [jobID]
        );

        connection.release(); // Release the connection back to the pool
        
        res.json({message: "1"});
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).send('Internal server error');
    }
};

export default handleJobPost;