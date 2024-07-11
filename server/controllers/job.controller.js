import { pool } from '../config/db.js'; // Importing the pool for database connection
import multer from 'multer';

// handle posting jobs for a client 
export const handleJobPost = async (req, res) => {
    console.log("we are Posting your job")
    console.log(req.body)
    const { Client_ID, Job_Title, Job_Type, Applicants_Needed, Job_Description, Job_Category, Job_Site, Application_Deadline, Experience_Level, Job_Location  } = req.body;

    // Parse the Applicants_Needed field from JSON string to object
    let applicantsNeededParsed;
    try {
        applicantsNeededParsed = JSON.parse(Applicants_Needed);
    } catch (error) {
        console.error('Failed to parse Applicants_Needed:', error);
        return res.status(400).send('Invalid Applicants_Needed format');
    }

    // Construct the Applicants_Needed string based on the parsed object
    let applicantsNeededString = '';
    if (applicantsNeededParsed.male) {
        applicantsNeededString += 'Male ';
    }
    if (applicantsNeededParsed.female) {
        applicantsNeededString += 'Female';
    }
    applicantsNeededString = applicantsNeededString.trim(); // Remove any trailing spaces

    console.log(Client_ID, Job_Title, Job_Type, applicantsNeededString, Job_Description, Job_Category, Job_Site, Application_Deadline, Experience_Level)
    try {
        // Get a connection from the pool
        const connection = await pool.getConnection();

        // Insert the new job into the database
        const [result] = await connection.execute(
            'INSERT INTO jobs (Client_ID, Job_Title, Job_Type, Applicants_Needed, Job_Description, Job_Category, Job_Site, Application_Deadline, Experience_Level, Location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [Client_ID, Job_Title, Job_Type, applicantsNeededString, Job_Description, Job_Category, Job_Site, Application_Deadline, Experience_Level, Job_Location]
        );

        connection.release(); // Release the connection back to the pool

        if(result.affectedRows > 0){
            res.json({message: '1'});
            console.log('Job Posted successfully!')
        }
        else
            res.json({message: '2'})
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