import { pool } from '../config/db.js'; // Importing the pool for database connection

export const handleLogin = async (req, res) => {
    console.log("we Are authunticating you information please Wait!!")
    const { Username, Password  } = req.body;
    try {
        // Get a connection from the pool
        const connection = await pool.getConnection();

        // Query to check if username and password match
        const [rows] = await connection.execute(
            'SELECT * FROM freelancer WHERE Username = ? AND Password = ?',
            [Username, Password]
        );

        connection.release(); // Release the connection back to the pool

        if (rows.length > 0) {
            res.send('Login successful!');
        } else {
            res.send('Invalid username or password');
        }
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).send('Internal server error');
    }
};

export const handleRegister = async (req, res) => {
    console.log("we are registering you to the system please wait")
    const { firstName, lastName, Username, Email, Password, Profession, Bio  } = req.body;

    try {
        // Get a connection from the pool
        const connection = await pool.getConnection();

        // Insert the new user into the database
        const [result] = await connection.execute(
            'INSERT INTO freelancer (FirstName, LastName, Username, Email, Password, Proffession, Bio) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [firstName, lastName, Username, Email, Password, Profession, Bio]
        );

        connection.release(); // Release the connection back to the pool

        res.status(201).send('User registered successfully!');
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).send('Internal server error');
    }
};


