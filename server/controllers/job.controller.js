import { pool } from '../config/db.js'; // Importing the pool for database connection

// handle posting jobs for a client 
export const handleJobPost = async (req, res) => {
    console.log("we are Posting your job")
    console.log(req.body)
    const { Client_ID, Job_Title, Job_Type, Applicants_Needed, Job_Description, Job_Category, Job_Site, Application_Deadline, Experience_Level, Job_Location, Job_Salary  } = req.body;

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
        applicantsNeededString = 'Male ';
    }
    if (applicantsNeededParsed.female) {
        applicantsNeededString = 'Female';
    }
    if (applicantsNeededParsed.male && applicantsNeededParsed.female){
        applicantsNeededString = 'Both'
    }
    applicantsNeededString = applicantsNeededString.trim(); // Remove any trailing spaces

    console.log(Client_ID, Job_Title, Job_Type, applicantsNeededString, Job_Description, Job_Category, Job_Site, Application_Deadline, Experience_Level, Job_Location, Job_Salary)
    try {
        // Get a connection from the pool
        const connection = await pool.getConnection();

        // Insert the new job into the database
        const [result] = await connection.execute(
            'INSERT INTO jobs (Client_ID, Job_Title, Job_Type, Applicants_Needed, Job_Description, Job_Category, Job_Site, Application_Deadline, Experience_Level, Location, Salary) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [Client_ID, Job_Title, Job_Type, applicantsNeededString, Job_Description, Job_Category, Job_Site, Application_Deadline, Experience_Level, Job_Location, Job_Salary]
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


// update information for a specific job
export const handleJobUpdate = async (req, res) => {
console.log("we are Posting your job")
    console.log(req.body)
    const { Job_ID, Job_Title, Job_Type, Applicants_Needed, Job_Description, Job_Category, Job_Site, Application_Deadline, Experience_Level, Job_Location, Job_Salary  } = req.body;

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
        applicantsNeededString = 'Male ';
    }
    if (applicantsNeededParsed.female) {
        applicantsNeededString = 'Female';
    }
    if (applicantsNeededParsed.male && applicantsNeededParsed.female){
        applicantsNeededString = 'Both'
    }
    applicantsNeededString = applicantsNeededString.trim(); // Remove any trailing spaces

    console.log(Job_ID, Job_Title, Job_Type, applicantsNeededString, Job_Description, Job_Category, Job_Site, Application_Deadline, Experience_Level, Job_Location, Job_Salary)
    try {
        // Get a connection from the pool
        const connection = await pool.getConnection();

        // Update the new job information into the database
        const [result] = await connection.execute(
            'UPDATE  jobs SET Job_Title = ?, Job_Type = ?, Applicants_Needed = ?, Job_Description = ?, Job_Category = ?, Job_Site = ?, Application_Deadline = ?, Experience_Level = ?, Location = ?, Salary = ? WHERE Job_ID = ?',
            [ Job_Title, Job_Type, applicantsNeededString, Job_Description, Job_Category, Job_Site, Application_Deadline, Experience_Level, Job_Location, Job_Salary , Job_ID]
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

// view active jobs which means job from hire table in the database where Completed_Date is null 
// using the join extracting the job title, description, category, from job table and 
// extracting first name and last name  and freelancer id from freelancer table using join
export const handleViewActiveJobs = async (req, res) => {  
    console.log("We are fetching your Active Jobs")
    const clientID = req.query.clientID; // get the clientID from the request parameters
    console.log(clientID);

    const sqlQuery = `
        SELECT 
            h.Hire_ID,
            j.Job_Title, 
            j.Job_Description, 
            j.Job_Category,
            f.FirstName AS Freelancer_FirstName,
            f.LastName AS Freelancer_LastName,
            f.Freelancer_ID
        FROM 
            hires h
        JOIN 
            applications a ON h.Application_ID = a.Application_ID
        JOIN 
            jobs j ON a.Job_ID = j.Job_ID
        JOIN 
            freelancer f ON a.Freelancer_ID = f.Freelancer_ID
        JOIN 
            client c ON h.Client_ID = c.Client_ID
        WHERE 
            h.Completed_Date IS NULL
            AND c.Client_ID = ?;
    `;  

    try {
        // Get a connection from the pool
        const connection = await pool.getConnection();

        // Retrieve from the database
        const [result] = await connection.execute(
            sqlQuery, [clientID]
        );

        connection.release(); // Release the connection back to the pool
        
        res.json(result);
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).send('Internal server error');
    }
};

export const handleJobComplete = async (req, res) =>{
    console.log("we are Completing the job you requested to complete")
    const Hire_ID = req.query.Hire_ID;
    console.log(Hire_ID);

    try{
        // get connection from pool
        const connection = await pool.getConnection();

        // retrieve the active jobs from the database
        const [result] = await connection.execute(`
            UPDATE hires SET Completed_Date = CURDATE() WHERE Hire_ID = ?
            `, [Hire_ID]);

        connection.release();
        
        if (result.affectedRows > 0){
            res.json({message: "1"})
            console.log("successfull")
        }
    } catch (error){
        console.error('Database query error:', error);
        res.status(500).send('Internal server error');
    }
}