import { pool } from '../config/db.js'; // Importing the pool for database connection

export const handleJobPost = async (req, res) => {
    console.log("we are registering you to the system please wait")
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

export default handleJobPost;